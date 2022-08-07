import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotAuthenticatedModule } from '../not-authenticated.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NotAuthenticatedModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form group elements count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(1);
  });

  it('check initial form values', () => {
    const loginFormGroup = component.signinForm;
    const loginFormValues = {password: ''};
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  

});
