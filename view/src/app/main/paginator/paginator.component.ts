import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  currentPage = 0;
  @Input() size:number | undefined = 0;
  @Output() pageChanged = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    this.currentPage = ((this.currentPage + 1) * HomeComponent.ELEMENT_PER_PAGE) > <number>this.size ? 0 : this.currentPage + 1;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage() {
    this.currentPage = (this.currentPage - 1) >= 0 ? (this.currentPage - 1) : Math.floor(<number>this.size / HomeComponent.ELEMENT_PER_PAGE);
    this.pageChanged.emit(this.currentPage);
  }

}
