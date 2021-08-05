import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { IpcRendererService } from './services/ipc-renderer-service';
import { ipcFactory } from './services/services.module';
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RenewComponent } from './renew/renew.component';

@NgModule({
  declarations: [
    AppComponent,
    NotLoggedComponent,
    NewUserComponent,
    RenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule
  ],
  providers: [{
    provide: IpcRendererService,
    useFactory: ipcFactory,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
