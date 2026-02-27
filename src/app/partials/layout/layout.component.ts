import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  sidebarOpen = false;

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Estado del menú:', this.sidebarOpen); // Si esto sale en consola, la lógica está bien
  }

}
