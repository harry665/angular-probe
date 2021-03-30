import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketItem } from 'src/app/models/basket';
import { AppState } from 'src/app/models/state';
import { ProductApiService } from 'src/app/services/product.service';
import { AddBasketItemAction, ReduceBasketItemAction } from 'src/app/store/actions/basket.actions';

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

  constructor(private store: Store<AppState>, private productApiService: ProductApiService) { }

  ngOnInit(): void {
  }

  addToBasket() {

    const product = this.productApiService.get(this.id)

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

  reduceFromBasket() {
    const product = this.productApiService.get(this.id)

    this.store.dispatch(new ReduceBasketItemAction(product.id));

  }  
}
