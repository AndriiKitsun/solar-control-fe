import { DEFAULT_LANG } from '../lang';

export class LocalStorageHelper {
  private static readonly darkModeClassKey = 'app-dark';
  private static readonly colorSchemeKey = 'colorScheme';
  private static readonly primaryColorKey = 'primaryColor';
  private static readonly surfaceColorKey = 'SurfaceColor';
  private static readonly themePresetKey = 'themePreset';
  private static readonly langKey = 'lang';

  static getLang(): string {
    return this.getKey(this.langKey, DEFAULT_LANG);
  }

  static saveLang(lang: string): void {
    this.setKey(this.langKey, lang);
  }

  static getKey<T>(key: string, fallback: T): T {
    return (localStorage.getItem(key) as T) ?? fallback;
  }

  static setKey(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
