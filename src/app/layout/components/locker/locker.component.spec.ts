import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LockerComponent } from './locker.component';

describe('LockerComponent', () => {
  let component: LockerComponent;
  let fixture: ComponentFixture<LockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
