import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketItem } from 'src/app/models/basket';
import { AppState } from 'src/app/models/state';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketItems: Observable<BasketItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.basketItems = this.store.select(store => store.basket)
  }

}
