import { AddBasketDiscountAction, AddBasketItemAction, ReduceBasketItemAction, RemoveBasketDiscountAction, RemoveBasketItemAction } from "../actions/basket.actions";

export type Actions = 
    AddBasketItemAction 
    | ReduceBasketItemAction 
    | RemoveBasketItemAction 
    | AddBasketDiscountAction 
    | RemoveBasketDiscountAction