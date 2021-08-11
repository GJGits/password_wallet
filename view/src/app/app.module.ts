import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { IpcRendererService } from './services/ipc-renderer-service';
import { ipcFactory } from './services/services.module';
import { NotAuthenticatedModule } from './not-authenticated/not-authenticated.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NotAuthenticatedModule,
    AuthenticatedModule
  ],
  providers: [{
    provide: IpcRendererService,
    useFactory: ipcFactory,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
