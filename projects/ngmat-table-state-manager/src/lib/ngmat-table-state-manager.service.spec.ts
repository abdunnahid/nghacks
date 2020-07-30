import { TestBed } from '@angular/core/testing';

import { NgmatTableStateManagerService } from './ngmat-table-state-manager.service';

describe('NgmatTableStateManagerService', () => {
  let service: NgmatTableStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmatTableStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
