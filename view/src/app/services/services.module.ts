import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpcRendererService } from './ipc-renderer-service';
import { environment } from 'src/environments/environment';
import { IpcProdService } from './ipc-prod.service';
import { IpcMockService } from './ipc-mock.service';

export function ipcFactory(): IpcRendererService {
  switch(environment.production){
    case true: {return new IpcProdService()}
    default: {return new IpcMockService()}
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: IpcRendererService,
    useFactory: ipcFactory,
  }]
})
export class ServicesModule { }
