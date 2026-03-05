import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-proyecto.component.html',
  styleUrls: ['./eliminar-proyecto.component.scss']
})
export class EliminarProyectoComponent {

  @Output() onConfirm = new EventEmitter<any>();

  isOpen = false;
  project: any;

  open(project: any) {
    this.project = project;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirmar() {
    this.onConfirm.emit(this.project);
    this.close();
  }

}
