import { TestBed } from '@angular/core/testing';

import { TotalbillService } from './totalbill.service';

describe('TotalbillService', () => {
  let service: TotalbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
