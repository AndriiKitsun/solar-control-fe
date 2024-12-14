import { TestBed } from '@angular/core/testing';

import { LangService } from './lang.service';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('LangService', () => {
  let service: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoTestingModule.forRoot({})],
    });
    service = TestBed.inject(LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
