import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToppingSelectionComponent } from './pages/topping-selection/topping-selection.component';
import { DonasRoutingModule } from './donas-routing.module';
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from './components/card/card.component';
import { DonaImagePipe } from './pipes/dona-image.pipe';
import { OrderFormComponent } from './pages/order-form/order-form.component';



@NgModule({
    declarations: [
        ToppingSelectionComponent,
        CardComponent,
        DonaImagePipe,
        OrderFormComponent
    ],
    imports: [
        CommonModule,
        DonasRoutingModule,
        SharedModule,
    ]
})
export class DonasModule { }
