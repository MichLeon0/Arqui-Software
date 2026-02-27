import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  // Agrega esto para ver en la consola si el valor realmente llega
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      console.log('¿El sidebar está abierto?:', changes['isOpen'].currentValue);
    }
  }

}
