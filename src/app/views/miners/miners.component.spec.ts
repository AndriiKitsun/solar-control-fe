import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinersComponent } from './miners.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { of } from 'rxjs';
import { MinerService } from './services/miner/miner.service';

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
          useValue: {},
        },
        {
          provide: MinerService,
          useValue: {
            getMiners: () => of(),
          },
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
