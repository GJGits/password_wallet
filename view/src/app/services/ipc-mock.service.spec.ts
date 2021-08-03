import { TestBed } from '@angular/core/testing';

import { IpcMockService } from './ipc-mock.service';

describe('IpcMockService', () => {
  let service: IpcMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpcMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
