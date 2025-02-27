import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionComponent } from './protection.component';
import { ProtectionService } from '../../services/protection/protection.service';
import { ProtectionServiceMock } from '../../services/protection/mocks/protection.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';

describe('ProtectionComponent', () => {
  let component: ProtectionComponent;
  let fixture: ComponentFixture<ProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ProtectionService,
          useClass: ProtectionServiceMock,
        },
        {
          provide: MessageService,
          useClass: ToastServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
