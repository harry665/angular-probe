import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BasketComponent } from './pages/basket/basket.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewComponent } from './pages/review/review.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },

  {
    // everything else passes on to home site
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
