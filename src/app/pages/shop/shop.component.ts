import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/models/shop-item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items: ShopItem[] = [
    {
      imageUrl: "http://i.epvpimg.com/zwmkfab.png",
      subTitle:"Special Donut",
      title:"Vegan Marmalade Donut",
      price: "4.99"
    },
    {
      imageUrl: "http://i.epvpimg.com/BotNcab.png",
      subTitle:"Special Product",
      title:"Homemade Marmalade",
      price: "14.99"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
