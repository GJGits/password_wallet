/* eslint-disable max-lines-per-function */

import { Injectable } from '@angular/core';
import { IpcRendererService } from './ipc-renderer-service';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { WalletItem } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class IpcMockService implements IpcRendererService {

  walletItems: WalletItem[] = [
    {
      id: 0,
      serviceName: 'Facebook',
      description: 'Info to access to my facebook account',
      credentials: [{  name: 'email', value: 'myemail@example.it' }, {name: 'username', value: 'myUsername' }, {name: '2 way auth second device', value: '3331111111' }],
      secrets: [{ name: 'password', value: 'Abecedario11!!', lastUpdate: 1626945931177 }]
    },
    {
      id: 1,
      serviceName: 'Instagram',
      description: 'Info to access to my instagram account',
      credentials: [{name: 'email', value: 'myemail@example.it' }, {name: 'username', value: 'myUsername' }, {name: '2 way auth second device', value: '3331111111' }],
      secrets: [{name: 'password', value: 'Abecedario11!!', lastUpdate: 1626945931177 }]
    },
    {
      id: 2,
      serviceName: 'MyBank',
      description: 'Info to access to my mybank account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 3,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 4,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 5,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 6,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 7,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 8,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 9,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 10,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 11,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{  name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },
    {
      id: 12,
      serviceName: 'WalletItem',
      description: 'Info to access to my account',
      credentials: [],
      secrets: [{ name: 'pin', value: '0000', lastUpdate: 1625345111177 }]
    },

  ];

  constructor() {
    console.log("mock ipc service created");
  }

  on(channel: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  send(channel: string, data?: any): void {
    //throw new Error('Method not implemented.');
  }

  invoke(channel: string, data?: any): Observable<any> {
    if (channel == 'signin') {
      if (data === 'foo')
        return of({ status: 200 }); // request ok
      if (data === 'paz')
        return of({ status: 500, errorMessage: 'Wrong credentials' }); // wrong credentials
    }
    if (channel == 'accountExistsAndIsValid') {
      return of({status: 400}); // 400: not set, 205: outdated, 200: ok
    }
    if (channel == 'wallet_items') {
      return of(this.walletItems);
    }
    if (channel == 'wallet_items_by_name') {
      return of(this.walletItems.filter(el => el.serviceName.includes(data)));
    }
    if (channel == 'wallet_items_by_id') {
      return of(this.walletItems.find(el => el.id === data));
    }
    if (channel == 'setNewCredentials') {
      return of({ status: 200 });
      // return of({status: 500, errorMessage: 'Permission denied: check logs for more information'});
    }
    if (channel == 'delete_item') {
      this.walletItems = this.walletItems.filter(el => el.id !== data.id);
      return of({ status: 200 });
      // return of({status: 500, errorMessage: 'Permission denied: check logs for more information'});
    }

    if (channel == 'add_or_update_item') {
      let nextId = 0;
      this.walletItems.forEach((el) => {
        if (el.id > nextId)
          nextId = el.id;
      });
      data.id = nextId + 1;
      this.walletItems.push(data);
    }
    return of({});
  }

}
