import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Credential_, WalletItem } from 'src/app/services/interfaces';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-credential-card',
  templateUrl: './credential-card.component.html',
  styleUrls: ['./credential-card.component.scss']
})
export class CredentialCardComponent implements OnInit {

  @Input() walletItem: WalletItem = <WalletItem>{
    id: 0,
    description: '',
    credentials: <Credential_[]>[],
    secrets: [{ name: '', value: '', lastUpdate: 0 }]
  };
  passRate = 0;
  openViewLink = "/wallet";
  showDelete = false;
  @Output() confirmDelete = new EventEmitter<WalletItem>();

  constructor(private passwordRateService: PasswordStrengthCalculatorService) { }

  ngOnInit(): void {
    this.openViewLink += "/" + this.walletItem.id;
    this.passRate = this.passwordRateService.computePasswordStrengthRate(this.walletItem.secrets[0].value);
  }

  _delete() {
    this.showDelete = true;
  }

  cancelDelete() {
    this.showDelete = false;
  }

  onConfirmDelete() {
    this.confirmDelete.emit(this.walletItem);
  }

}
