import { TestBed } from '@angular/core/testing';

import { ApiMgmtService } from './api-mgmt.service';

describe('ApiMgmtService', () => {
  let service: ApiMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
