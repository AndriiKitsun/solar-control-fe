import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionGroupComponent } from './protection-group.component';

describe('ProtectionGroupComponent', () => {
  let component: ProtectionGroupComponent;
  let fixture: ComponentFixture<ProtectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
