import { TestBed } from '@angular/core/testing';

import { CapeService } from './cape.service';

describe('CapeService', () => {
  let service: CapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
