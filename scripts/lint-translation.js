const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const LOCALIZATION_DIR = 'public/i18n';
const LOCALIZATION_DIR_NORM = path.normalize(LOCALIZATION_DIR);
const EN_FILE = 'en.json';

var argv = require('minimist')(process.argv.slice(2), {
  boolean: 'fix',
});

if (argv.fix) {
  fixLocalization();
} else {
  try {
    lintLocalization();
  } catch (err) {
    console.error(err.message + '\n');
    console.warn('You can fix error by running: "npm run localization:fix"\n');
    throw err;
  }
}

function lintLocalization() {
  // get list of localization files from index
  const localizationFiles = childProcess
    .execSync(`git ls-files --directory ${LOCALIZATION_DIR_NORM}`)
    .toString()
    .trim()
    .split('\n');

  // get EN localization file path
  const enLocalizationFile = localizationFiles.find((file) => {
    const parsedPath = path.parse(file);
    return parsedPath.base === EN_FILE;
  });

  if (!enLocalizationFile)
    throw new Error('English localization file is missing');

  // get EN file JSON from HEAD
  const headEnLocalizationJSON = getFileHEAD(enLocalizationFile);

  // get EN file JSON from index
  const indexEnLocalizationJSON = getFileINDEX(enLocalizationFile);

  // get rest languages JSON list from index
  const otherLocalizationJSONs = localizationFiles
    .filter((file) => {
      const parsedPath = path.parse(file);
      return parsedPath.ext === '.json' && parsedPath.base !== EN_FILE;
    })
    .map((filePath) =>
      JSON.parse(
        childProcess.execSync(`git show :${filePath}`).toString().trim(),
      ),
    );

  const sortedHeadEnKeys = Object.keys(headEnLocalizationJSON).sort();

  // check if keys are same as in index EN version
  const sortedIndexEnKeys = Object.keys(indexEnLocalizationJSON).sort();

  for (let i = 0; i < otherLocalizationJSONs.length; i++) {
    let currentLocalization = otherLocalizationJSONs[i];
    let sortedKeys = Object.keys(currentLocalization).sort();

    if (JSON.stringify(sortedKeys) !== JSON.stringify(sortedIndexEnKeys)) {
      throw new Error("Localization keys don't match English file");
    }
  }

  // check if EN changes are applied to other localizations correctly
  for (let i = 0; i < otherLocalizationJSONs.length; i++) {
    let currentLocalization = otherLocalizationJSONs[i];

    for (let key of sortedHeadEnKeys) {
      if (
        indexEnLocalizationJSON[key] &&
        JSON.stringify(indexEnLocalizationJSON[key]) !==
          JSON.stringify(headEnLocalizationJSON[key]) &&
        JSON.stringify(currentLocalization[key]) !==
          JSON.stringify(indexEnLocalizationJSON[key])
      ) {
        throw new Error(
          'Localization changes of English file are not applied to other localization files',
        );
      }
    }
  }
}

function fixLocalization() {
  console.log('Localization fix in progress...');
  // Read English localization file
  fs.readFile(getFilePath(EN_FILE), 'utf8', (err, data) => {
    if (err) throw new Error('English localization file is missing');

    const enLocaleJSON = JSON.parse(data);
    const sortedKeys = Object.keys(enLocaleJSON).sort();
    const enLocaleFixed = {};
    sortedKeys.forEach((key) => (enLocaleFixed[key] = enLocaleJSON[key]));

    // Read all .json files in localization directory
    const files = fs
      .readdirSync(LOCALIZATION_DIR_NORM)
      .filter((file) => file !== EN_FILE && path.extname(file) === '.json');
    let pristineLocales = [];

    // read all localization files asynchronously
    Promise.all(files.map((file) => readFilePromise(getFilePath(file))))
      .then((rawFiles) => rawFiles.map((file) => JSON.parse(file)))
      // merge localization files with english localization
      .then((locales) => {
        // get EN file JSON from HEAD
        const headEnLocalizationJSON = getFileHEAD(
          `${LOCALIZATION_DIR}/${EN_FILE}`,
        );

        pristineLocales = locales;
        return locales.map((localeJSON, index) => {
          const localeName = files[index].replace('.json', '');

          return parseLocaleObjectValues(
            enLocaleJSON,
            headEnLocalizationJSON,
            localeJSON,
            localeName,
          );
        });
      })
      // write merged localization files
      .then((mergedLocales) =>
        Promise.all(
          files.map((file, idx) => {
            // No need to write file if keys are the same
            if (
              JSON.stringify(pristineLocales[idx]) ===
              JSON.stringify(mergedLocales[idx])
            ) {
              return Promise.resolve();
            }

            const sortedKeysLocale = Object.keys(mergedLocales[idx]).sort();
            const localeFixed = {};
            sortedKeysLocale.forEach(
              (key) => (localeFixed[key] = mergedLocales[idx][key]),
            );

            return writeJsonFileByNamePromise(file, localeFixed);
          }),
        ),
      )
      .then(() => writeJsonFileByNamePromise(EN_FILE, enLocaleFixed))
      .then(() => {
        console.log('Localization fix finished');
        childProcess.execSync(`git add ${LOCALIZATION_DIR}/\*.json`);
      })
      .catch((err) => console.error(err));
  });
}

function getFileHEAD(path) {
  return JSON.parse(
    childProcess.execSync(`git show HEAD:${path}`).toString().trim(),
  );
}

function parseLocaleObjectValues(
  changedEnLocale,
  enLocale = {},
  locale = {},
  localeName,
) {
  if (typeof changedEnLocale !== 'object') {
    return `[${localeName}]: ${changedEnLocale}`;
  }

  return Object.keys(changedEnLocale).reduce((acc, key) => {
    const isEnglishVocabularyChanged =
      JSON.stringify(changedEnLocale[key]) !== JSON.stringify(enLocale[key]);

    return {
      ...acc,
      [key]:
        (isEnglishVocabularyChanged &&
          parseLocaleObjectValues(
            changedEnLocale[key],
            enLocale[key],
            locale[key],
            localeName,
          )) ||
        locale[key],
    };
  }, {});
}

function getFileINDEX(path) {
  return JSON.parse(
    childProcess.execSync(`git show :${path}`).toString().trim(),
  );
}

function getFilePath(fileName) {
  return path.normalize(path.join(LOCALIZATION_DIR_NORM, fileName));
}

function readFilePromise(path, enc = 'utf8') {
  return fs.promises.readFile(path, enc);
}

function writeJsonFileByNamePromise(file, data, enc = 'utf8') {
  return writeFilePromise(
    getFilePath(file),
    JSON.stringify(data, null, 2) + '\n',
    enc,
  );
}

function writeFilePromise(path, data, enc = 'utf8') {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, data, enc, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
