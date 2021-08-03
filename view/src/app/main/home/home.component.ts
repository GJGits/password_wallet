import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { WalletItem } from 'src/app/services/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  walletItems$: Observable<WalletItem[]> = of([]);
  currentPage = 0;
  static ELEMENT_PER_PAGE = 15;

  constructor(private apiService: ApiService) {
    this.walletItems$ = this.apiService.getWalletItems();
  }

  ngOnInit(): void {
  }

  isElementInCurrentPage(itemIndex: number) {
    let startIndex = HomeComponent.ELEMENT_PER_PAGE * this.currentPage;
    let endIndex = startIndex + HomeComponent.ELEMENT_PER_PAGE;
    return itemIndex >= startIndex && itemIndex < endIndex;
  }

  pageChanged(newPage: number) {
    this.currentPage = newPage;
  }

  deleteItem(item: WalletItem) {
    this.apiService.deleteItem(item);
    this.walletItems$ = this.apiService.getWalletItems();
  }

}
