import { TestBed } from '@angular/core/testing';
import { LogsService } from './logs.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('LogsService', () => {
  let service: LogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(LogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
