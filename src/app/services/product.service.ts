import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { Product } from "../models/shop-item";

@Injectable()
export class ProductApiService {

    constructor(private http: HttpClient) {}

    // create(id: string, imageUrl: string, subTitle: string, title: string, price: number): void {
    //     const newProduct: Product = {
    //         id,
    //         imageUrl,
    //         subTitle,
    //         title,
    //         price
    //     }
        
    //     this.products.push(newProduct)
    // }

    get(id: string): Observable<Product> {
        const product =  this.http.get<Product>(`http://localhost:3000/products/${id}`)
        
        return product
    }

    getAll(): Observable<Product[]>  {
        const products = this.http.get<Product[]>("http://localhost:3000/products")
        
        return products
    }
}