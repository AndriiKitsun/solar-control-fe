import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsTableComponent } from './sensors-table.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('SensorsTableComponent', () => {
  let component: SensorsTableComponent;
  let fixture: ComponentFixture<SensorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsTableComponent, TranslocoTestingModule.forRoot({})],
    }).compileComponents();

    fixture = TestBed.createComponent(SensorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
