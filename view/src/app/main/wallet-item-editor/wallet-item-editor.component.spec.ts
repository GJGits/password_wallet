import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletItemEditorComponent } from './wallet-item-editor.component';

describe('WalletItemEditorComponent', () => {
  let component: WalletItemEditorComponent;
  let fixture: ComponentFixture<WalletItemEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletItemEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
