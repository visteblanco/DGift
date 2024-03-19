import { Component } from '@angular/core';

declare var bootstrap: any; // Declarar bootstrap para evitar errores de TypeScript

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  cerrarOffcanvas() {
    const offcanvas = document.getElementById('offcanvasWithBothOptions');
    const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
    offcanvasInstance.hide();
  }

}
