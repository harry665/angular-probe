import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BasketItem } from "../models/basket";
import { AppState } from "../models/state";
import { AddBasketItemAction, ReduceBasketItemAction } from "../store/actions/basket.actions";
import { ProductApiService } from "./product.service";

@Injectable()
export class StoreService {

    constructor(private store: Store<AppState>, private productApiService: ProductApiService) {}

    addToBasket(id: string) {

        const product = this.productApiService.get(id)
    
        const newBasketItem: BasketItem = {
          id: "1",
          productId: product.id,
          quantity: 1,
          name: product.title,
          imageUrl: product.imageUrl,
          subTitle: product.subTitle,
          title: product.title,
          price: product.price
        }
    
        this.store.dispatch(new AddBasketItemAction(newBasketItem));
      }  
    
      reduceFromBasket(id: string) {
        const product = this.productApiService.get(id)
    
        this.store.dispatch(new ReduceBasketItemAction(product.id));
      }

}