import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsComponent } from './sensors.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { of } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SensorsWebSocketService } from './services/sensors-websocket.service';
import { SensorsService } from './services/sensors/sensors.service';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: SensorsWebSocketService,
          useValue: {
            isConnected$: of(),
            on: () => of(),
          },
        },
        {
          provide: SensorsService,
          useValue: {},
        },
        {
          provide: MessageService,
          useValue: {},
        },
        {
          provide: ConfirmationService,
          useValue: {},
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
