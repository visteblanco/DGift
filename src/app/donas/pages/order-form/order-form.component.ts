import { Component } from '@angular/core';
import { Dona } from '../../interfaces/dona.interface';
import { DonasService } from '../../services/donas.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {

  constructor (
    private donasService:DonasService
    ) {}

  public donas: Dona [] = [];
  ngOnInit(): void {
    this.donasService.getHeroes()
    .subscribe(donas => this.donas = donas);
  }
}
