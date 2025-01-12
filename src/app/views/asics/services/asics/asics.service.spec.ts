import { TestBed } from '@angular/core/testing';
import { AsicsService } from './asics.service';

describe('AsicsService', () => {
  let service: AsicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
