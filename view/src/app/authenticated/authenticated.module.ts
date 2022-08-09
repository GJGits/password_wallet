import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { CredentialCardComponent } from './credential-card/credential-card.component';
import { StrengthBarComponent } from './strength-bar/strength-bar.component';
import { SecretComponent } from './secret/secret.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { DummiesModule } from '../dummies/dummies.module';



@NgModule({
  declarations: [
    WalletComponent,
    CredentialCardComponent,
    StrengthBarComponent,
    SecretComponent,
    WalletItemComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticatedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DummiesModule
  ]
})
export class AuthenticatedModule { }
