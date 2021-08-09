import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Credential_, Secret, WalletItem } from 'src/app/services/interfaces';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-wallet-item-editor',
  templateUrl: './wallet-item-editor.component.html',
  styleUrls: ['./wallet-item-editor.component.scss']
})
export class WalletItemEditorComponent implements OnInit {

  walletItem: WalletItem = { id: -1, serviceName: '', description: '', credentials: [], secrets: [] };

  itemForm = this.fb.group({
    serviceName: [''],
    description: [''],
    credentials: this.fb.array([
    ]),
    secrets: this.fb.array([
    ])
  });

  newCredentialGroup = this.fb.group({
    name: [''],
    value: ['']
  });

  newSecretGroup = this.fb.group({
    name: [''],
    value: ['']
  });


  suggested_secret = '';
  secret_type = 'password';
  pinLength = this.fb.control(4);

  constructor(private apiService: ApiService, private router: Router, private activeRoute: ActivatedRoute, private passwordStrengthCalculator: PasswordStrengthCalculatorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.apiService.getWalletItemsById(+params['id']).subscribe(item => {
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

        });
      }
    });
  }

  get credentials() {
    return this.itemForm.get('credentials') as FormArray;
  }

  get secrets() {
    return this.itemForm.get('secrets') as FormArray;
  }

  makeFormDirty() {
    this.itemForm.markAsDirty();
  }

  addCredential() {
    if (this.newCredentialGroup.get('name')?.value && this.newCredentialGroup.get('value')?.value) {
      this.credentials.push(this.fb.group({
        name: [this.newCredentialGroup.get('name')?.value],
        value: [this.newCredentialGroup.get('value')?.value]
      }));
      this.newCredentialGroup.get('name')?.setValue('');
      this.newCredentialGroup.get('value')?.setValue('');
    }
    this.credentials.markAsDirty();
  }

  addSecret() {
    if (this.newSecretGroup.get('name')?.value && this.newSecretGroup.get('value')?.value) {
      this.secrets.push(this.fb.group({
        name: [this.newSecretGroup.get('name')?.value],
        value: [this.newSecretGroup.get('value')?.value]
      }));
      this.newSecretGroup.get('name')?.setValue('');
      this.newSecretGroup.get('value')?.setValue('');
    }
    this.secrets.markAsDirty();
  }

  suggestOne() {
    if (this.secret_type === 'password')
      this.suggested_secret = this.passwordStrengthCalculator.suggestPassword();
    else
      this.suggested_secret = this.passwordStrengthCalculator.suggestPin(this.pinLength.value);
  }

  suggestPassword() {
    this.secret_type = 'password';
  }

  suggestPin() {
    this.secret_type = 'pin';
  }

  updateWallet() {
    this.walletItem.serviceName = this.itemForm.get('serviceName')?.value;
    this.walletItem.description = this.itemForm.get('description')?.value;
    this.walletItem.credentials = [];
    for (let credentialGroup of this.credentials.controls) {
      console.log("new credential: ", credentialGroup.get('value')?.value);
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
