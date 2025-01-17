import { TestBed } from '@angular/core/testing';
import { AsicsService } from './asics.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AsicsService', () => {
  let service: AsicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AsicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
