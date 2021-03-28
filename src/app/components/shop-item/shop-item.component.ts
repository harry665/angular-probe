import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() price: string;

  constructor() { }

  ngOnInit(): void {
  }

}
