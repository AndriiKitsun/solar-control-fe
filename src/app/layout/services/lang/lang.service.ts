import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { LocalStorageHelper } from '@common/helpers';
import { DEFAULT_LANG } from '@common/constants';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private static readonly langKey = 'lang';

  constructor(private readonly translocoService: TranslocoService) {}

  static getLang(): string {
    return LocalStorageHelper.get(LangService.langKey, DEFAULT_LANG);
  }

  switchLang(lang: string): void {
    this.translocoService.setActiveLang(lang);

    LocalStorageHelper.set(LangService.langKey, lang);
  }
}
