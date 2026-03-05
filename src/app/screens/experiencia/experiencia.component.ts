import { Component } from '@angular/core';

interface Experiencia {
  id: number;
  empresa: string;
  cargo: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [];

  nuevaExperiencia: Experiencia = this.resetFormulario();

  editando: boolean = false;

  private contadorId = 1;

  agregar(): void {
    if (!this.formularioValido()) return;

    this.experiencias.push({
      ...this.nuevaExperiencia,
      id: this.contadorId++
    });

    this.nuevaExperiencia = this.resetFormulario();
  }

  editar(experiencia: Experiencia): void {
    this.nuevaExperiencia = { ...experiencia };
    this.editando = true;
  }

  actualizar(): void {
    const index = this.experiencias.findIndex(e => e.id === this.nuevaExperiencia.id);

    if (index !== -1) {
      this.experiencias[index] = { ...this.nuevaExperiencia };
    }

    this.cancelar();
  }

  eliminar(id: number): void {
    this.experiencias = this.experiencias.filter(e => e.id !== id);
  }

  cancelar(): void {
    this.nuevaExperiencia = this.resetFormulario();
    this.editando = false;
  }

  private resetFormulario(): Experiencia {
    return {
      id: 0,
      empresa: '',
      cargo: '',
      fechaInicio: '',
      fechaFin: '',
      descripcion: ''
    };
  }

  private formularioValido(): boolean {
    return !!(
      this.nuevaExperiencia.empresa &&
      this.nuevaExperiencia.cargo &&
      this.nuevaExperiencia.fechaInicio
    );
  }
}
