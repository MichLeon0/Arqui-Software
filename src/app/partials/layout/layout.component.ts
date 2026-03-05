import { Component, ViewChild  } from '@angular/core';
import { ProyectosComponent } from 'src/app/screens/proyectos/proyectos.component';
import { ProjectService } from 'src/app/services/project.service';
import { AgregarProyevtoComponent } from 'src/app/modals/agregar-proyevto/agregar-proyevto.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private projectService: ProjectService) { }

  sidebarOpen = false;
    @ViewChild('proyectos') proyectosComponent!: ProyectosComponent;

  @ViewChild('agregarModal') agregarModal!: AgregarProyevtoComponent;

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Estado del menú:', this.sidebarOpen);
  }

  async agregarProyecto(project: any) {
    console.log('[LayoutComponent] agregarProyecto() recibido:', project);

    try {
      const res = await this.projectService.addProject(project);
      console.log('[LayoutComponent] Guardado en Firestore OK:', res);

      // Cerrar modal al guardar correctamente
      this.agregarModal.close();

      // Opcional: limpiar el formulario del modal
      this.agregarModal.project = {
        title: '',
        description: '',
        image: '',
        githubLink: '',
        technologies: []
      };
      this.agregarModal.newTech = '';
    } catch (e: any) {
      console.error('[LayoutComponent] Error guardando:', e);
      console.error('code:', e?.code, 'message:', e?.message);
    }
  }

}
