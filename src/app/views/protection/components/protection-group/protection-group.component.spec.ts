import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionGroupComponent } from './protection-group.component';
import { ProtectionService } from '../../services/protection/protection.service';
import { ProtectionServiceMock } from '../../services/protection/mocks/protection.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';
import { ProtectionGroup } from '../../types/protection-group.types';
import {
  ProtectionRuleId,
  ProtectionActionId,
} from '../../enums/protection.enums';
import { ProtectionRuleModel } from '../../models/protection-rule.models';

describe('ProtectionGroupComponent', () => {
  let component: ProtectionGroupComponent;
  let fixture: ComponentFixture<ProtectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionGroupComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ProtectionService,
          useClass: ProtectionServiceMock,
        },
        {
          provide: ConfirmationService,
          useClass: ConfirmDialogServiceMock,
        },
        {
          provide: MessageService,
          useClass: ToastServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectionGroupComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('disabled', false);

    fixture.componentRef.setInput('group', {
      id: ProtectionRuleId.AC_OUTPUT_VOLTAGE,
      minInputId: `${ProtectionRuleId.AC_OUTPUT_VOLTAGE}Min`,
      maxInputId: `${ProtectionRuleId.AC_OUTPUT_VOLTAGE}Max`,
      label: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.LABEL',
      input: {
        min: 150,
        max: 290,
        step: 1,
        fractionDigits: 0,
        suffix: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.SUFFIX',
      },
      actions: [],
    } satisfies ProtectionGroup);

    fixture.componentRef.setInput('rule', {
      id: ProtectionRuleId.AC_OUTPUT_VOLTAGE,
      min: 180.1,
      max: 257,
      actions: [ProtectionActionId.DISABLE_ASICS],
    } satisfies ProtectionRuleModel);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
