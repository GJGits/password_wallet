import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterPasswordComponent } from './updateMasterPassword.component';

describe('RenewComponent', () => {
  let component: UpdateMasterPasswordComponent;
  let fixture: ComponentFixture<UpdateMasterPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMasterPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
