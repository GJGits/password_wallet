import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UpdateMasterPasswordComponent } from './updateMasterPassword/updateMasterPassword.component';
import { NewUserGuard } from '../guards/new-user.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [NewUserGuard] },
  {path: 'login/:errorMessage', component: LoginComponent, canActivate: [NewUserGuard] },
  { path: 'newUser', component: NewUserComponent },
  { path: 'update', component: UpdateMasterPasswordComponent },
  { path: 'update/:errorMessage', component: UpdateMasterPasswordComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotAuthenticatedRoutingModule { }
