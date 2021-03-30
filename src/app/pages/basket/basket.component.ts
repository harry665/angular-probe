import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketItem } from 'src/app/models/basket';
import { AppState } from 'src/app/models/state';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  totalPrice:number = 0

  basketItems: BasketItem[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    
    this.store.select(store => store.basket).subscribe((basketItems) => {
      this.basketItems = basketItems

      for (const basketItem of basketItems) {
        this.totalPrice += basketItem.price * basketItem.quantity
      }
    })
  }

}
