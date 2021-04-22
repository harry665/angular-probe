import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items = []

  constructor(private productApiService: ProductApiService) { }

  ngOnInit(): void {
    this.productApiService.getAll().subscribe((items) => {
      this.items = items
    })
  }

}