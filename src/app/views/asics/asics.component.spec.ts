import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsicsComponent } from './asics.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { AsicsServiceMock } from './services/asics/mocks/asics.service.mock';
import { ActivatedRouteMock } from '@common/mocks/activated-route.mock';

describe('MinersComponent', () => {
  let component: AsicsComponent;
  let fixture: ComponentFixture<AsicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AsicsComponent,
        NoopAnimationsModule,
        TranslocoTestingModule.forRoot({}),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteMock,
        },
        {
          provide: AsicsService,
          useClass: AsicsServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AsicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
