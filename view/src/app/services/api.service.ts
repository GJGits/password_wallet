import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WalletItem } from './interfaces';
import { IpcRendererService } from './ipc-renderer-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private ipcRenderer: IpcRendererService) { }

  signin(password: string): Observable<any> | undefined {
    return this.ipcRenderer.invoke('signin', password);
  }

  newCredentials(oldPassword: string, newPassword: string): Observable<any> | undefined {
    return this.ipcRenderer.invoke('setNewCredentials', oldPassword, newPassword);
  }

  isNewAccount(): Observable<any> {
    return this.ipcRenderer.invoke('accountExistsAndIsValid');
  }

  getWalletItems(): Observable<any[]> {
    return this.ipcRenderer.invoke('wallet_items');
  }

  getWalletItemsById(id: number){
    return this.ipcRenderer.invoke('wallet_items_by_id', id);
  }

  deleteItem(item: WalletItem) {
    this.ipcRenderer.invoke('delete_item', item);
  }

  addItem(walletItem: WalletItem) {
    this.ipcRenderer.invoke('add_or_update_item', walletItem);
  }
}
