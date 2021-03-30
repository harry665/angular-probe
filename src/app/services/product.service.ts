import { Injectable } from "@angular/core";
import { Product } from "../models/shop-item";

@Injectable()
export class ProductApiService {

    products: Product[] = [
        {
            id: "1",
            imageUrl: "http://i.epvpimg.com/zwmkfab.png",
            subTitle:"Special Donut",
            title:"Vegan Marmalade Donut",
            price: 4.99
        },
        {
            id: "2",
            imageUrl: "http://i.epvpimg.com/BotNcab.png",
            subTitle:"Special Product",
            title:"Homemade Marmalade",
            price: 14.99
        },
    ]

    constructor() {}

    create(id: string, imageUrl: string, subTitle: string, title: string, price: number): void {
        const newProduct: Product = {
            id,
            imageUrl,
            subTitle,
            title,
            price
        }

        this.products.push(newProduct)
    }

    get(id: string): Product {
        return this.products.find(product => product.id === id)
    }

    getAll(): Product[]  {
        return this.products
    }
}