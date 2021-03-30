export interface BasketItem {
    id: string;
    productId: string
    quantity: number
    name: string

    //load data dynamic by products
    imageUrl: string
    subTitle: string
    title: string
    price: number
}