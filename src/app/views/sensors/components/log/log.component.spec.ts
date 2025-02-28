import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogComponent } from './log.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { LogsService } from '../../services/logs/logs.service';
import { LogsServiceMock } from '../../services/logs/mocks/logs.service.mock';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: LogsService,
          useClass: LogsServiceMock,
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

    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
