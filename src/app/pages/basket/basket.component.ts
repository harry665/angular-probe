import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Basket } from 'src/app/models/basket';
import { AppState } from 'src/app/models/state';
import { ProductApiService } from 'src/app/services/product.service';
import { AddBasketDiscountAction, RemoveBasketDiscountAction, RemoveBasketItemAction } from 'src/app/store/actions/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {

  discountCode: string

  totalPrice: number = 0
  
  basketQuantity: number = 0
  
  basket: Basket = {
    items: []
  };

  
  constructor(private store: Store<AppState>, private productApiService: ProductApiService) { }

  ngOnInit(): void {
    
    // Basket total price and quantity
    this.store.select(store => store.basket).subscribe((basket) => {
      this.basket.items = basket.items
      this.basket.discountCode = basket.discountCode

      let basketQuantity = 0
      let totalPrice = 0

      for (const basketItem of basket.items) {
        totalPrice += basketItem.price * basketItem.quantity
        basketQuantity += basketItem.quantity
      }

      if(basket.discountCode) {
        totalPrice *= 0.85
      }

      this.totalPrice = totalPrice
      this.basketQuantity = basketQuantity
    })
  }

  removeFromBasket(id:string) {    
    const product = this.productApiService.get(id)

    this.store.dispatch(new RemoveBasketItemAction(product.id));
  }

  addCoupon(){
    if (['EASTER21'].includes(this.discountCode)){
      
      this.store.dispatch(new AddBasketDiscountAction(this.discountCode))
      this.discountCode = undefined
    }

  }

  removeCoupon(){
      this.store.dispatch(new RemoveBasketDiscountAction())
  }
  
}
