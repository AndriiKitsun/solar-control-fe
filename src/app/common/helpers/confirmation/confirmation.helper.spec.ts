import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule, TranslocoService } from '@jsverse/transloco';
import { getConfirmDialogConfig } from './confirmation.helper';
import { PrimeIcons } from 'primeng/api';
import { TypedConfirmation } from '../../types/confirmation.types';

describe('ConfirmationHelper', () => {
  let translocoService: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoTestingModule.forRoot({})],
    });

    translocoService = TestBed.inject(TranslocoService);
  });

  describe('getConfirmDialogConfig', () => {
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

      const result = getConfirmDialogConfig(
        {
          message: 'PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
        },
        translocoService,
      );

      expect(result).toEqual(expectedResult as TypedConfirmation);
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
          label: 'en.BUTTON.RESET',
        },
        acceptButtonProps: {
          label: 'en.BUTTON.SAVE',
          icon: PrimeIcons.TIMES,
        },
      };

      const result = getConfirmDialogConfig(
        {
          message: 'PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
          position: 'position',
          rejectButtonProps: {
            label: 'BUTTON.RESET',
            severity: 'success',
          },
          acceptButtonProps: {
            label: 'BUTTON.SAVE',
            icon: PrimeIcons.TIMES,
          },
        },
        translocoService,
      );

      expect(result).toEqual(expectedResult as TypedConfirmation);
    });
  });
});
