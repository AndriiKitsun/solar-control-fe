import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinersComponent } from './miners.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('MinersComponent', () => {
  let component: MinersComponent;
  let fixture: ComponentFixture<MinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinersComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
