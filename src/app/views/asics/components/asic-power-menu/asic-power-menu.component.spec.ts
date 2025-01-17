import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsicPowerMenuComponent } from './asic-power-menu.component';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { AsicsService } from '../../services/asics/asics.service';
import { AsicsServiceMock } from '../../services/asics/mocks/asics.service.mock';
import { MessageService } from 'primeng/api';
import { MessageServiceMock } from '@common/mocks/message.service.mock';

describe('AsicPowerMenuComponent', () => {
  let component: AsicPowerMenuComponent;
  let fixture: ComponentFixture<AsicPowerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsicPowerMenuComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: AsicsService,
          useClass: AsicsServiceMock,
        },
        {
          provide: MessageService,
          useClass: MessageServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AsicPowerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
