import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent implements OnInit {

  @Input() rate: number = 0;
  classes: any[] = [
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log("rate:", this.rate);
    this.classes = [
      { strength_item: true, strength_item_red: (this.rate >= 1)},
      { strength_item: true, strength_item_red: (this.rate >= 2)},
      { strength_item: true, strength_item_red: (this.rate >= 3)},
      { strength_item: true, strength_item_yellow: (this.rate >= 4) },
      { strength_item: true, strength_item_yellow: (this.rate >= 5) },
      { strength_item: true, strength_item_green: (this.rate >= 6),   },
      { strength_item: true, strength_item_green: (this.rate >= 7),   },
      { strength_item: true, strength_item_green: (this.rate >= 8),   },
      { strength_item: true, strength_item_blue: (this.rate >= 9) },
      { strength_item: true, strength_item_blue: (this.rate >= 10) }
    ];
  }

}
