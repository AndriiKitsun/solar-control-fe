import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyAsicDialogComponent } from './modify-asic-dialog.component';

describe('ModifyAsicDialogComponent', () => {
  let component: ModifyAsicDialogComponent;
  let fixture: ComponentFixture<ModifyAsicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyAsicDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyAsicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
