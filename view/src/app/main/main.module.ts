import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { CredentialCardComponent } from './credential-card/credential-card.component';
import { StrengthBarComponent } from './strength-bar/strength-bar.component';
import { SecretComponent } from './secret/secret.component';
import { WalletItemEditorComponent } from './wallet-item-editor/wallet-item-editor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    HomeComponent,
    CredentialCardComponent,
    StrengthBarComponent,
    SecretComponent,
    WalletItemEditorComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
