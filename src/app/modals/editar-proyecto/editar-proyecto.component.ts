import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-proyecto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})
export class EditarProyectoComponent {

  @Output() onSave = new EventEmitter<any>();

  isOpen = false;
  project: any = {};

  open(project: any) {
    this.project = { ...project }; // clonamos
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  guardar() {
    this.onSave.emit(this.project);
    this.close();
  }

}
