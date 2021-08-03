import { TestBed } from '@angular/core/testing';

import { IpcProdService } from './ipc-prod.service';

describe('IpcProdService', () => {
  let service: IpcProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpcProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
