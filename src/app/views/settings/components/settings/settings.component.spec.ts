import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { SettingsService } from '../../services/settings/settings.service';
import { SettingsServiceMock } from '../../services/settings/mocks/settings.service.mock';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
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

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
