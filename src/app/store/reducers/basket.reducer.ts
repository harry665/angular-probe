import { BasketItem } from 'src/app/models/basket';
import { AddBasketItemAction, ReduceBasketItemAction, RemoveBasketItemAction } from '../actions/basket.actions';
import { BasketActionTypes } from '../actions/types';



const initialState: BasketItem[] = [];

export function BasketReducer(basketItems: BasketItem[] = initialState, action: AddBasketItemAction | ReduceBasketItemAction | RemoveBasketItemAction) {
  switch (action.type) {
    case BasketActionTypes.ADD_BASKET_ITEM: {
      return addItem(basketItems, action)
    }

    case BasketActionTypes.REDUCE_BASKET_ITEM: {
      return reduceItem(basketItems, action)
    }

    case BasketActionTypes.REMOVE_BASKET_ITEM: {
      return removeItem(basketItems, action)
    }

    default: {
        return basketItems;
    }
  }
}

function addItem(basketItems: BasketItem[], action: AddBasketItemAction): BasketItem[] {
  const basketItemIndex = basketItems.findIndex(basketItem => basketItem.productId === action.payload.productId)
      
  if(basketItemIndex === -1) {
    return [...basketItems, action.payload];
  }

  const newBasketItems: BasketItem[] = []
  for (const [index, basketItem] of basketItems.entries()) {
    if(index === basketItemIndex) {

      newBasketItems.push({
        ...basketItem,
        quantity: basketItem.quantity + 1
      })
      
    } else {
      newBasketItems.push(basketItem)
    }
  }
  
  return newBasketItems
}

function reduceItem(basketItems: BasketItem[], action: ReduceBasketItemAction): BasketItem[] {
  const basketItemIndex = basketItems.findIndex(basketItem => basketItem.productId === action.payload)
      
  if(basketItemIndex === -1) {
    return basketItems;
  }

  const newBasketItems: BasketItem[] = []
  for (const [index, basketItem] of basketItems.entries()) {
    if(index === basketItemIndex) {

      const newQuantity = basketItem.quantity - 1
      if(newQuantity > 0) {
        newBasketItems.push({
          ...basketItem,
          quantity: newQuantity
        })
      }
      
    } else {
      newBasketItems.push(basketItem)
    }
  }
  
  return newBasketItems
}

function removeItem(basketItems: BasketItem[], action: RemoveBasketItemAction) {
  const basketItemIndex = basketItems.findIndex(basketItem => basketItem.productId === action.payload)

  if(basketItemIndex === -1) {
    return basketItems;
  }

  const newBasketItems: BasketItem[] = []
  for (const [index, basketItem] of basketItems.entries()) {
    if(index !== basketItemIndex) {
      newBasketItems.push(basketItem)
    }
  }
  
  return newBasketItems
}