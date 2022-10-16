import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { DynamicFormArrayControl } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { WithSubscription } from '../interfaces';

@Component({
  selector: 'app-wallet-item-editor',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.scss']
})

export class WalletItemComponent extends WithSubscription implements OnInit {

  itemForm = this.fb.group({
    id: [-1],
    serviceName: [''],
    description: [''],
    credentials: new DynamicFormArrayControl([], this.fb),
    secrets: new DynamicFormArrayControl([], this.fb),
  });

  suggested_secret = '';

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { super() }

  ngOnInit(): void {
    this.initItem();
  }

  private initItem() {
    this.subscriptions$?.push(this.activeRoute.params.pipe(mergeMap((params) => {
      return this.apiService.getWalletItemsById(+params['id']);
    })).subscribe(item => {
      if (item) {
        this.itemForm.setValue(item);
      }
    }));
  }

  get credentials() {
    return this.itemForm.get('credentials') as FormArray;
  }

  get secrets() {
    return this.itemForm.get('secrets') as FormArray;
  }

  addCredential() {
    this.credentials.push(this.fb.group({name: [''], value: ['']}));
  }

  addSecret() {
    this.secrets.push(this.fb.group({name: [''], value: [''], lastUpdate: ['']}));
  }

  onPasswordGenerated(password: string) {
    this.suggested_secret = password
  }

  updateWallet() {
    this.apiService.addItem(this.itemForm.value);
    this.itemForm.markAsPristine();
  }

}
