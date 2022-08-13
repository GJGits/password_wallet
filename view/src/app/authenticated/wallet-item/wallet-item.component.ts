import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { concat, iif, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AutoUnsub } from 'src/app/decorators/auto-unsub';
import { ApiService } from 'src/app/services/api.service';
import { WalletItem } from 'src/app/services/interfaces';
import { WithSubscription } from '../interfaces';

@Component({
  selector: 'app-wallet-item-editor',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.scss']
})

export class WalletItemComponent extends WithSubscription implements OnInit {

  walletItem: WalletItem = { id: -1, serviceName: '', description: '', credentials: [], secrets: [] };

  itemForm = this.fb.group({
    serviceName: [''],
    description: [''],
    credentials: this.fb.array([
    ]),
    secrets: this.fb.array([
    ]),
    newCredentialGroup: this.fb.group({
      name: [''],
      value: ['']
    }),
    newSecretGroup: this.fb.group({
      name: [''],
      value: ['']
    })
  });

  suggested_secret = '';

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { super()}

  ngOnInit(): void {

    this.subscriptions$?.push(this.activeRoute.params.pipe(mergeMap((params) => {
      return this.apiService.getWalletItemsById(+params['id']);
    })).subscribe(item => {
      if (item) {
        this.walletItem = item
        this.itemForm.controls['serviceName'].setValue(item.serviceName);
        this.itemForm.controls['description'].setValue(item.description);
        for (let credential of item.credentials) {
          this.credentials.push(this.fb.group({ name: [credential.name], value: [credential.value] }));
        }
        for (let secret of item.secrets) {
          this.secrets.push(this.fb.group({ name: [secret.name], value: [secret.value] }));
        }
      }

    }));
  }

  get credentials() {
    return this.itemForm.get('credentials') as FormArray;
  }

  get newCredentialGroup() {
    return this.itemForm.get('newCredentialGroup') as FormGroup;
  }

  getCredentialsFormGroupAt(i: number) {
    return this.credentials.at(i) as FormGroup;
  }

  get secrets() {
    return this.itemForm.get('secrets') as FormArray;
  }

  get newSecretGroup() {
    return this.itemForm.get('newSecretGroup') as FormGroup;
  }

  getSecretFormGroupAt(i: number) {
    return this.secrets.at(i) as FormGroup;
  }

  addCredential() {
    let newName = this.newCredentialGroup.get('name')?.value;
    let newValue = this.newCredentialGroup.get('value')?.value;
    if (newName && newValue) {
      let nextId = this.credentials.length;
      this.credentials.push(this.fb.group({
        id: [nextId],
        name: [newName],
        value: [newValue]
      }));
      this.newCredentialGroup.reset();
    }
  }

  addSecret() {
    let newName = this.newSecretGroup.get('name')?.value;
    let newValue = this.newSecretGroup.get('value')?.value;
    if (newName && newValue) {
      this.secrets.push(this.fb.group({
        name: [newName],
        value: [newValue]
      }));
      this.newSecretGroup.reset();
    }
  }

  onPasswordGenerated(password: string) {
    this.suggested_secret = password
  }


  updateWallet() {
    this.walletItem.serviceName = this.itemForm.get('serviceName')?.value;
    this.walletItem.description = this.itemForm.get('description')?.value;
    this.walletItem.credentials = [];
    for (let credentialGroup of this.credentials.controls) {
      this.walletItem.credentials.push({ name: credentialGroup.get('name')?.value, value: credentialGroup.get('value')?.value });
    }
    this.walletItem.secrets = [];
    for (let secretGroup of this.secrets.controls) {
      let index = this.walletItem.secrets.findIndex(el => el.name === secretGroup.get('name')?.value);
      if (index != -1) {
        if (this.walletItem.secrets[index].value !== secretGroup.get('value')?.value) {
          this.walletItem.secrets[index].value = secretGroup.get('value')?.value
          this.walletItem.secrets[index].lastUpdate = new Date().getTime();
        }
      } else {
        this.walletItem.secrets.push({ name: secretGroup.get('name')?.value, value: secretGroup.get('value')?.value, lastUpdate: new Date().getTime() });
      }
    }
    this.apiService.addItem(this.walletItem);
    this.itemForm.markAsPristine();
  }

}
