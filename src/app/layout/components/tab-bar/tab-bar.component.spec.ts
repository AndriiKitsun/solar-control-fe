import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabBarComponent } from './tab-bar.component';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { ActivatedRouteMock } from '@common/mocks/activated-route.mock';
import { ProtectionService } from '@views/protection/services/protection/protection.service';
import { ProtectionServiceMock } from '@views/protection/services/protection/mocks/protection.service.mock';

describe('TabBarComponent', () => {
  let component: TabBarComponent;
  let fixture: ComponentFixture<TabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteMock,
        },
        {
          provide: ProtectionService,
          useClass: ProtectionServiceMock,
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
