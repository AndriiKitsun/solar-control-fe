import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlGroupComponent } from './control-group.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';
import { ControlService } from '../../services/control/control.service';
import { ControlServiceMock } from '../../services/control/mocks/control.service.mock';
import { ControlGroup } from '../../types/control-group.types';
import { ControlRuleId } from '../../enums/control-rule.enum';
import { ControlRuleModel } from '../../models/control-rule.models';

describe('ControlGroupComponent', () => {
  let component: ControlGroupComponent;
  let fixture: ComponentFixture<ControlGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlGroupComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ControlService,
          useClass: ControlServiceMock,
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

    fixture = TestBed.createComponent(ControlGroupComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('disabled', false);

    fixture.componentRef.setInput('group', {
      id: ControlRuleId.DC_BATTERY_AVG_VOLTAGE,
      label: 'CONTROL.GROUP.DC_BATTERY_AVG_VOLTAGE.LABEL',
      inputs: [
        {
          id: `${ControlRuleId.DC_BATTERY_AVG_VOLTAGE}ScaleUpTime`,
          formControlId: 'scaleUpCheckTime',
          min: 0,
          max: 1000,
          step: 1,
          fractionDigits: 1,
          suffix: 'CONTROL.PLACEHOLDER.TIME_SUFFIX',
          label: 'CONTROL.PLACEHOLDER.SCALE_UP_CHECK_TIME',
        },
      ],
    } satisfies ControlGroup);

    fixture.componentRef.setInput('rule', {
      id: ControlRuleId.DC_BATTERY_AVG_VOLTAGE,
      scaleUpCheckTime: 0,
      scaleUpValue: 0,
      scaleDownCheckTime: 0,
      scaleDownValue: 0,
    } satisfies ControlRuleModel);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
