import { TestBed } from '@angular/core/testing';

import { MuiTabsService } from './mui-tabs.service';

describe('MuiTabsService', () => {
  let service: MuiTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuiTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
