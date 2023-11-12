import { TestBed } from '@angular/core/testing';

import { PulseControllerService } from './pulse-controller.service';

describe('PulseControllerService', () => {
  let service: PulseControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PulseControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
