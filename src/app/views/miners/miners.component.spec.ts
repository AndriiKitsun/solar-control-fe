import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinersComponent } from './miners.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { MinerService } from './services/miner/miner.service';
import { MinerServiceMock } from './services/miner/mocks/miner.service.mock';
import { ActivatedRouteMock } from '@common/mocks/activated-route.mock';

describe('MinersComponent', () => {
  let component: MinersComponent;
  let fixture: ComponentFixture<MinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MinersComponent,
        NoopAnimationsModule,
        TranslocoTestingModule.forRoot({}),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteMock,
        },
        {
          provide: MinerService,
          useClass: MinerServiceMock,
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
