import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionGroupComponent } from './protection-group.component';
import { ProtectionService } from '../../services/protection/protection.service';
import { ProtectionServiceMock } from '../../services/protection/mocks/protection.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { ConfirmDialogServiceMock } from '@common/services/confirm-dialog/mocks/confirm-dialog.service.mock';

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
    fixture.componentRef.setInput('group', {});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
