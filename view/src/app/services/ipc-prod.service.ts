import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { IpcRendererService } from './ipc-renderer-service';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpcProdService implements IpcRendererService {

  private ipcRenderer: IpcRenderer = <IpcRenderer>{};

  constructor() { 
    if ((<any>window).require) {
      try {
        this.ipcRenderer = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  on(channel: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  send(channel: string, data?: any): void {
    throw new Error('Method not implemented.');
  }

  invoke(channel: string, data?: any): Observable<any>  {
    return from(this.ipcRenderer?.invoke(channel, data));
  }
}
