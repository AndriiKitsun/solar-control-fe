import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorsToolbarComponent } from './sensors-toolbar.component';

describe('SensorsToolbarComponent', () => {
  let component: SensorsToolbarComponent;
  let fixture: ComponentFixture<SensorsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SensorsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
