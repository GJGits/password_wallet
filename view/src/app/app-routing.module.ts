import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewUserGuard } from './guards/new-user.guard';
import { WalletItemEditorComponent } from './main/wallet-item-editor/wallet-item-editor.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NotLoggedComponent } from './not-logged/not-logged.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: NotLoggedComponent, canActivate: [NewUserGuard]},
  {path: 'newUser', component: NewUserComponent},
  {path: 'newUser/:outdated', component: NewUserComponent},
  {path: 'itemEditor/:id', component: WalletItemEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
