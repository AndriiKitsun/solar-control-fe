import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService],
      imports: [TranslocoTestingModule.forRoot({})],
    });

    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
