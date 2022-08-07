import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from '../services/services.module';

import { WalletGuard } from './wallet.guard';

describe('WalletGuard', () => {
  let guard: WalletGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule,RouterTestingModule],
    });
    guard = TestBed.inject(WalletGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
