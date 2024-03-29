import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { WalletGuard } from '../guards/wallet.guard';

const routes: Routes = [
  {path: 'wallet', component: WalletComponent, canActivate: [WalletGuard]},
  {path: 'wallet/:id', component: WalletItemComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticatedRoutingModule { }
