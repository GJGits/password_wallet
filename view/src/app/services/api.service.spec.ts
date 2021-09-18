import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { IpcRendererService } from './ipc-renderer-service';
import { ipcFactory, ServicesModule } from './services.module';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
