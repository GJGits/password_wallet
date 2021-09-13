import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UpdateMasterPasswordComponent } from './updateMasterPassword/updateMasterPassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { NotAuthenticatedRoutingModule } from './not-authenticated-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    UpdateMasterPasswordComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotAuthenticatedRoutingModule
  ]
})
export class NotAuthenticatedModule { }
