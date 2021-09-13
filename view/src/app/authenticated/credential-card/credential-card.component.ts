import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WalletItem } from 'src/app/services/interfaces';
import { PasswordStrengthCalculatorService } from 'src/app/services/password-strength-calculator.service';

@Component({
  selector: 'app-credential-card',
  templateUrl: './credential-card.component.html',
  styleUrls: ['./credential-card.component.scss']
})
export class CredentialCardComponent implements OnInit {

  @Input() walletItem: WalletItem  = <WalletItem>{};
  passRate = 0;
  openViewLink = "/wallet";
  showDelete = false;
  @Output() onConfirmDelete = new EventEmitter<WalletItem>();

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

  confirmDelete() {
    this.onConfirmDelete.emit(this.walletItem);
  }

}
