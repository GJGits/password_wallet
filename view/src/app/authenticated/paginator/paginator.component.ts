import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WalletComponent } from '../wallet/wallet.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  currentPage = 0;
  @Input() size:number | undefined = 0;
  @Output() pageChanged = new EventEmitter<number>();
  

  constructor() { }

  nextPage() {
    this.currentPage = ((this.currentPage + 1) * WalletComponent.ELEMENT_PER_PAGE) > <number>this.size ? 0 : this.currentPage + 1;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage() {
    this.currentPage = (this.currentPage - 1) >= 0 ? (this.currentPage - 1) : Math.floor(<number>this.size / WalletComponent.ELEMENT_PER_PAGE);
    this.pageChanged.emit(this.currentPage);
  }

}
