import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { PrimeIcons } from 'primeng/api';
import { ConfirmDialogService } from './confirm-dialog.service';

describe('ConfirmDialogService', () => {
  let service: ConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmDialogService],
      imports: [TranslocoTestingModule.forRoot({})],
    });

    service = TestBed.inject(ConfirmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('confirmDialog', () => {
    let confirmSpy: jasmine.Spy;

    beforeEach(() => {
      confirmSpy = spyOn(service, 'confirm');
    });

    it('should return default config', () => {
      const expectedResult = {
        header: 'en.CONFIRM_DIALOG.HEADER',
        icon: PrimeIcons.EXCLAMATION_TRIANGLE,
        message: 'en.PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
        rejectButtonProps: {
          severity: 'secondary',
          icon: PrimeIcons.TIMES,
          outlined: true,
          label: 'en.BUTTON.CANCEL',
        },
        acceptButtonProps: {
          label: 'en.BUTTON.OK',
        },
      };

      service.confirmDialog({
        message: 'PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
      });

      expect(confirmSpy).toHaveBeenCalledWith(expectedResult);
    });

    it('should return config with overridden fields', () => {
      const expectedResult = {
        header: 'en.CONFIRM_DIALOG.HEADER',
        icon: PrimeIcons.EXCLAMATION_TRIANGLE,
        message: 'en.PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
        position: 'position',
        rejectButtonProps: {
          severity: 'success',
          icon: PrimeIcons.TIMES,
          outlined: true,
          label: 'en.BUTTON.CANCEL',
        },
        acceptButtonProps: {
          label: 'en.BUTTON.OK',
          icon: PrimeIcons.TIMES,
        },
      };

      service.confirmDialog({
        message: 'PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
        position: 'position',
        rejectButtonProps: {
          label: 'BUTTON.CANCEL',
          severity: 'success',
        },
        acceptButtonProps: {
          label: 'BUTTON.OK',
          icon: PrimeIcons.TIMES,
        },
      });

      expect(confirmSpy).toHaveBeenCalledWith(expectedResult);
    });
  });
});
