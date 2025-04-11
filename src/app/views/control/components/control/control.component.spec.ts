import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlComponent } from './control.component';
import { ControlService } from '../../services/control/control.service';
import { ControlServiceMock } from '../../services/control/mocks/control.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';

describe('ProtectionComponent', () => {
  let component: ControlComponent;
  let fixture: ComponentFixture<ControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ControlService,
          useClass: ControlServiceMock,
        },
        {
          provide: MessageService,
          useClass: ToastServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
