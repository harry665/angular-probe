import { BasketItem } from 'src/app/models/basket';
import { AddBasketItemAction } from '../actions/basket.actions';
import { BasketActionTypes } from '../actions/types';



const initialState: BasketItem[] = [];

export function BasketReducer(state: BasketItem[] = initialState, action: AddBasketItemAction) {
  switch (action.type) {
    case BasketActionTypes.ADD_BASKET_ITEM: {
        return [...state, action.payload];
    }

    default: {
        return state;
    }
  }
}