import { Action } from '@ngrx/store';
import { BasketItem } from 'src/app/models/basket';
import { BasketActionTypes } from './types';

export class AddBasketItemAction implements Action {
  readonly type = BasketActionTypes.ADD_BASKET_ITEM

  constructor(public payload: BasketItem) { }
}