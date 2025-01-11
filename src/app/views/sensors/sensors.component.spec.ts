import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsComponent } from './sensors.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SensorsWebSocketService } from './services/sensors-websocket/sensors-websocket.service';
import { SensorsService } from './services/sensors/sensors.service';
import { SensorsWebsocketServiceMock } from './services/sensors-websocket/mocks/sensors-websocket.service.mock';
import { SensorsServiceMock } from './services/sensors/mocks/sensors.service.mock';
import { ConfirmationServiceMock } from '@common/mocks/confirmation.service.mock';
import { MessageServiceMock } from '@common/mocks/message.service.mock';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: SensorsWebSocketService,
          useClass: SensorsWebsocketServiceMock,
        },
        {
          provide: SensorsService,
          useClass: SensorsServiceMock,
        },
        {
          provide: MessageService,
          useClass: MessageServiceMock,
        },
        {
          provide: ConfirmationService,
          useClass: ConfirmationServiceMock,
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
