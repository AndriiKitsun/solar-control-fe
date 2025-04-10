import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsicSettingsComponent } from './asic-settings.component';

describe('AsicComponentComponent', () => {
  let component: AsicSettingsComponent;
  let fixture: ComponentFixture<AsicSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsicSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
