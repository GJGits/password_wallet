import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotAuthenticatedModule } from '../not-authenticated.module';

import { UpdateMasterPasswordComponent } from './updateMasterPassword.component';

describe('UpdateMasterPasswordComponent', () => {
  let component: UpdateMasterPasswordComponent;
  let fixture: ComponentFixture<UpdateMasterPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NotAuthenticatedModule],
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
