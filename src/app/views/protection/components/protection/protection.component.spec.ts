import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectionComponent } from './protection.component';
import { ProtectionService } from '../../services/protection/protection.service';
import { ProtectionServiceMock } from '../../services/protection/mocks/protection.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('ProtectionComponent', () => {
  let component: ProtectionComponent;
  let fixture: ComponentFixture<ProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: ProtectionService,
          useClass: ProtectionServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
