import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyAsicDialogComponent } from './modify-asic-dialog.component';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DialogServiceMock } from '@common/mocks/dialog.service.mock';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { AsicsService } from '../../services/asics/asics.service';
import { AsicsServiceMock } from '../../services/asics/mocks/asics.service.mock';

describe('ModifyAsicDialogComponent', () => {
  let component: ModifyAsicDialogComponent;
  let fixture: ComponentFixture<ModifyAsicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyAsicDialogComponent, TranslocoTestingModule.forRoot({})],
      providers: [
        {
          provide: DynamicDialogRef,
          useValue: DialogServiceMock.dynamicDialogRefMock,
        },
        {
          provide: DialogService,
          useClass: DialogServiceMock,
        },
        {
          provide: AsicsService,
          useClass: AsicsServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyAsicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
