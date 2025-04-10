import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsicSettingsComponent } from './asic-settings.component';
import { MessageService } from 'primeng/api';
import { ToastServiceMock } from '@common/services/toast/mocks/toast.service.mock';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('AsicSettingsComponent', () => {
  let component: AsicSettingsComponent;
  let fixture: ComponentFixture<AsicSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsicSettingsComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: MessageService,
          useClass: ToastServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AsicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
