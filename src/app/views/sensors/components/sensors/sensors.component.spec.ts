import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsComponent } from './sensors.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SensorsService } from '../../services/sensors/sensors.service';
import { SensorsServiceMock } from '../../services/sensors/mocks/sensors.service.mock';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { SettingsService } from '../../../settings/services/settings/settings.service';
import { SettingsServiceMock } from '../../../settings/services/settings/mocks/settings.service.mock';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: SensorsService,
          useClass: SensorsServiceMock,
        },
        {
          provide: SettingsService,
          useClass: SettingsServiceMock,
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

    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
