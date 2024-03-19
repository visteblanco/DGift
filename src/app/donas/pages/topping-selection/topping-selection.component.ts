import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topping-selection',
  templateUrl: './topping-selection.component.html',
  styleUrls: ['./topping-selection.component.css']
})
export class ToppingSelectionComponent {

  toppings: string[] = ['Chispitas de Chocolate', 'Coco Rallado', 'Maní Picado', 'Fresas en Rodajas', 'Malvaviscos'];
  sauces: string[] = ['Salsa de Arequipe', 'Salsa de Mora', 'Salsa de Chocolate', 'Salsa de Caramelo', 'Salsa de Frambuesa'];
  coatings: string[] = ['Chocolate', 'Caramelo', 'Glaseado de Vainilla', 'Glaseado de Fresa', 'Glaseado de Limón'];
  toppingsSelected: string[] = [];
  saucesSelected: string[] = [];
  coatingsSelected: string[] = [];
  combinaciones: any[] = [];
  combinacionActual: number = 1;
  @Output() pedidoGuardado = new EventEmitter<boolean>();
  mostrandoOrderForm: boolean = false;

  handleToppingsSelectionChange(selectedItems: string[]) {
    this.toppingsSelected = selectedItems;
  }

  handleSaucesSelectionChange(selectedItems: string[]) {
    this.saucesSelected = selectedItems;
  }

  handleCoatingsSelectionChange(selectedItems: string[]) {
    this.coatingsSelected = selectedItems;
  }

  guardarCombinacion() {
    const combinacion = {
      covertura: this.coatingsSelected,
      salsas: this.saucesSelected,
      toppings: this.toppingsSelected
    };

    this.combinaciones.push(combinacion);
    if (this.combinacionActual < 3) {
      // Limpiar selecciones para la próxima combinación
      this.coatingsSelected = [];
      this.saucesSelected = [];
      this.toppingsSelected = [];

      this.combinacionActual++;
    } else {
      // Emitir evento con las combinaciones finales
      // this.pedidoGuardado.emit(true);
      // this.mostrandoOrderForm = true;
    }
  }
}
