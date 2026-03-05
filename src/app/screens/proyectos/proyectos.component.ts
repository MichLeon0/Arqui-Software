import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarProyectoComponent } from 'src/app/modals/editar-proyecto/editar-proyecto.component';
import { EliminarProyectoComponent } from 'src/app/modals/eliminar-proyecto/eliminar-proyecto.component';
import { ProjectService } from 'src/app/services/project.service';
import { AgregarProyevtoComponent } from 'src/app/modals/agregar-proyevto/agregar-proyevto.component';

interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, EditarProyectoComponent, EliminarProyectoComponent, AgregarProyevtoComponent

  ],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {


  ngOnInit() {
  this.projectService.getProjects().subscribe(data => {
    console.log("Proyectos recibidos:", data);
    this.projects = data;
  });
}
  constructor(private projectService: ProjectService) {}


  @ViewChild('editarModal') editarModal!: EditarProyectoComponent;
  @ViewChild('eliminarModal') eliminarModal!: EliminarProyectoComponent;

  proyectoSeleccionado: any;

  abrirEditar(project: any) {
    this.proyectoSeleccionado = project;
    this.editarModal.open(project);
  }

  abrirEliminar(project: any) {
    this.proyectoSeleccionado = project;
    this.eliminarModal.open(project);
  }

  async actualizarProyecto(projectActualizado: any) {
  try {
    await this.projectService.updateProject(
      projectActualizado.id,
      projectActualizado
    );
  } catch (error) {
    console.error(error);
  }
}
  async eliminarProyectoConfirmado(project: any) {
  try {
    await this.projectService.deleteProject(project.id);
  } catch (error) {
    console.error(error);
  }
}

  projects: any[] = [];

  onEdit(project: Project) {
    console.log('Editar', project);
  }

  onDelete(project: Project) {
    this.projects = this.projects.filter(p => p !== project);
  }

toArray(value: any): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    // Si viniera como "Angular, Firebase"
    return value.split(',').map(v => v.trim()).filter(Boolean);
  }
  return [];
}



}
