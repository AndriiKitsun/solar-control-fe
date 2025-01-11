import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { LangService } from '../../services/lang/lang.service';
import { ThemeService } from '../../services/theme/theme.service';
import { ThemeServiceMock } from '../../services/theme/mocks/theme.service.mock';
import { ActivatedRouteMock } from '@common/mocks/activated-route.mock';
import { LangServiceMock } from '../../services/lang/mocks/lang.service.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteMock,
        },
        {
          provide: ThemeService,
          useClass: ThemeServiceMock,
        },
        {
          provide: LangService,
          useClass: LangServiceMock,
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
