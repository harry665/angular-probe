import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() id: string;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() price: string;

  basketItemQuantity: number = 0

  constructor(private store: Store<AppState>, private storeService: StoreService) { }

  ngOnInit(): void {
        // Basket total price and quantity
        this.store.select(store => store.basket).subscribe((basket) => {   
          
          for (const basketItem of basket.items) {
            if (basketItem.productId === this.id) {
               this.basketItemQuantity = basketItem.quantity
               
               return
            }
          }

          this.basketItemQuantity = 0
        })
  }

  addToBasket() {
    this.storeService.addToBasket(this.id)
  }  

  reduceFromBasket() {
    this.storeService.reduceFromBasket(this.id)
  }
  
}
