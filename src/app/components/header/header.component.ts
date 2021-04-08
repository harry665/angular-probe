import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basketQuantity: number = 0
  
  router: any;
  showMenu: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(store => store.basket).subscribe((basket) => {
      let basketQuantity = 0

      for (const basketItem of basket.items) {
        basketQuantity += basketItem.quantity
      }

      this.basketQuantity = basketQuantity
    }) 
  }
  
  getBackToTop(): void {
    window.scroll(0,0);
  }
}
