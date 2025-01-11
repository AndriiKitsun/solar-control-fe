import { TestBed } from '@angular/core/testing';
import { SensorsService } from './sensors.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SensorsService', () => {
  let service: SensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
