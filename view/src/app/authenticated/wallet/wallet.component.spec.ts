import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from 'src/app/services/services.module';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ WalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
