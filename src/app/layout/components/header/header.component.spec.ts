import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { LangService } from '../../services/lang/lang.service';
import { ThemeService } from '../../services/theme/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
        {
          provide: ThemeService,
          useValue: {},
        },
        {
          provide: LangService,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
