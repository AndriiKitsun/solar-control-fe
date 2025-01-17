import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsicsComponent } from './asics.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { AsicsServiceMock } from './services/asics/mocks/asics.service.mock';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogServiceMock } from '@common/mocks/dialog.service.mock';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmationServiceMock } from '@common/mocks/confirmation.service.mock';
import { MessageServiceMock } from '@common/mocks/message.service.mock';

describe('AsicsComponent', () => {
  let component: AsicsComponent;
  let fixture: ComponentFixture<AsicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsicsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: AsicsService,
          useClass: AsicsServiceMock,
        },
        {
          provide: DialogService,
          useClass: DialogServiceMock,
        },
        {
          provide: ConfirmationService,
          useClass: ConfirmationServiceMock,
        },
        {
          provide: MessageService,
          useClass: MessageServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AsicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
