import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { ToppingSelectionComponent } from './pages/topping-selection/topping-selection.component';

const routes: Routes=[
  {
    path:'order',
    component:OrderFormComponent
  },
  {
    path:'toppings',
    component:ToppingSelectionComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DonasRoutingModule { }
