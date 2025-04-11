import { TestBed } from '@angular/core/testing';
import { ControlService } from './control.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ControlService', () => {
  let service: ControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
