import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsComponent } from './sensors.component';
import { SensorService } from './services';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { of } from 'rxjs';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: SensorService,
          useValue: {
            getSensorsData: () => of(),
          },
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
