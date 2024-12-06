import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabBarComponent } from './tab-bar.component';
import { ActivatedRoute } from '@angular/router';

describe('TabBarComponent', () => {
  let component: TabBarComponent;
  let fixture: ComponentFixture<TabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
