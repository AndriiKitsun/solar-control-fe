import { ClassMock } from '@common/types/test.types';
import { LangService } from '../lang.service';

export class LangServiceMock implements ClassMock<LangService> {
  switchLang(lang: string): void {}
}
