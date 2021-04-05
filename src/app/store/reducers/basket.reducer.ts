import { Basket } from 'src/app/models/basket';
import { AddBasketItemAction, ReduceBasketItemAction, RemoveBasketItemAction } from '../actions/basket.actions';
import { BasketActionTypes } from '../actions/types';


const initialState: Basket = {
  items: []
};

export function BasketReducer(basket: Basket = initialState, action: AddBasketItemAction | ReduceBasketItemAction | RemoveBasketItemAction) {
  switch (action.type) {
    case BasketActionTypes.ADD_BASKET_ITEM: {
      return addItem(basket, action)
    }

    case BasketActionTypes.REDUCE_BASKET_ITEM: {
      return reduceItem(basket, action)
    }

    case BasketActionTypes.REMOVE_BASKET_ITEM: {
      return removeItem(basket, action)
    }

    default: {
        return basket;
    }
  }
}

function addItem(basket: Basket, action: AddBasketItemAction): Basket {
  const basketItemIndex = basket.items.findIndex(basketItem => basketItem.productId === action.payload.productId)
      
  if(basketItemIndex === -1) {
    return {
      ...basket,
      items: [...basket.items, action.payload]
    }
  }

  const newBasket: Basket = {
    ...basket,
    items: []
  }
  for (const [index, basketItem] of basket.items.entries()) {
    if(index === basketItemIndex) {

      newBasket.items.push({
        ...basketItem,
        quantity: basketItem.quantity + 1
      })
      
    } else {
      newBasket.items.push(basketItem)
    }
  }
  
  return newBasket
}

function reduceItem(basket: Basket, action: ReduceBasketItemAction): Basket {
  const basketItemIndex = basket.items.findIndex(basketItem => basketItem.productId === action.payload)
      
  if(basketItemIndex === -1) {
    return basket;
  }

  const newBasket: Basket = {
    ...basket,
    items: [],
  }
  for (const [index, basketItem] of basket.items.entries()) {
    if(index === basketItemIndex) {

      const newQuantity = basketItem.quantity - 1
      if(newQuantity > 0) {
        newBasket.items.push({
          ...basketItem,
          quantity: newQuantity
        })
      }
      
    } else {
      newBasket.items.push(basketItem)
    }
  }
  
  return newBasket
}

function removeItem(basket: Basket, action: RemoveBasketItemAction): Basket {
  const basketItemIndex = basket.items.findIndex(basketItem => basketItem.productId === action.payload)

  if(basketItemIndex === -1) {
    return basket;
  }

  const newBasket: Basket = {
    ...basket,
    items: []
  }
  for (const [index, basketItem] of basket.items.entries()) {
    if(index !== basketItemIndex) {
      newBasket.items.push(basketItem)
    }
  }
  
  return newBasket
}