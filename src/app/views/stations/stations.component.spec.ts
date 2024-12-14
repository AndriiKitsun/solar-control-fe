import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationsComponent } from './stations.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('StationsComponent', () => {
  let component: StationsComponent;
  let fixture: ComponentFixture<StationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsComponent, TranslocoTestingModule.forRoot({})],
    }).compileComponents();

    fixture = TestBed.createComponent(StationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
