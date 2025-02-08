import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { LocalStorageHelper } from '@common/helpers/local-storage.helper';
import { DEFAULT_LANG } from '@common/constants/lang.constants';
import { filter, map, firstValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private static readonly langKey = 'lang';

  private isLangLoaded = false;

  constructor(private readonly translocoService: TranslocoService) {}

  static getLang(): string {
    return LocalStorageHelper.get(LangService.langKey, DEFAULT_LANG);
  }

  switchLang(lang: string): void {
    this.translocoService.setActiveLang(lang);
    document.documentElement.lang = lang;

    LocalStorageHelper.set(LangService.langKey, lang);
  }

  async langLoaded(): Promise<boolean> {
    if (this.isLangLoaded) {
      return this.isLangLoaded;
    }

    return firstValueFrom(
      this.translocoService.events$.pipe(
        filter((event) => event.type === 'translationLoadSuccess'),
        map(() => true),
        tap((value) => {
          this.isLangLoaded = value;
        }),
      ),
    );
  }
}
