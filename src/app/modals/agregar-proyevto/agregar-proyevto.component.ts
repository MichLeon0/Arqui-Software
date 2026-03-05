import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-proyevto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-proyevto.component.html',
  styleUrls: ['./agregar-proyevto.component.scss']
})
export class AgregarProyevtoComponent implements OnInit {

  isOpen = false;

  saving = false;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.openAgregar$.subscribe(() => {
      this.isOpen = true;
    });
  }

   @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();



  project = {
  title: '',
  description: '',
  image: '',
  githubLink: '',
  technologies: [] as string[]
};

  newTech: string = '';

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.onClose.emit();
  }

  addTech() {
    if (this.newTech.trim()) {
      this.project.technologies.push(this.newTech.trim());
      this.newTech = '';
    }
  }

  removeTech(tech: string) {
    this.project.technologies =
      this.project.technologies.filter(t => t !== tech);
  }

  submit() {
  console.log('[AgregarProyevtoComponent] submit() disparado', this.project);

  if (!this.project.title || !this.project.description) {
    alert('Título y descripción son obligatorios');
    return;
  }

  this.onSave.emit({ ...this.project });
  console.log('[AgregarProyevtoComponent] onSave emitido');
}

}
