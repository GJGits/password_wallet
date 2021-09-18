import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from 'src/app/services/services.module';
import { AuthenticatedModule } from '../authenticated.module';

import { WalletItemComponent } from './wallet-item.component';

describe('WalletItemComponent', () => {
  let component: WalletItemComponent;
  let fixture: ComponentFixture<WalletItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule, AuthenticatedModule],
      declarations: [ WalletItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
