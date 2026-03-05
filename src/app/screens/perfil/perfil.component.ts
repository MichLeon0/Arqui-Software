import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { EditarPerfilComponent } from 'src/app/modals/editar-perfil/editar-perfil.component';
import { EditarSobremiComponent } from 'src/app/modals/editar-sobremi/editar-sobremi.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(private modalService: ModalService) {}
// si ya tiene user, se respeta
  user = {
    name: 'John Doe',
    role: 'Full Stack Developer',
    description: `...`,
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    memberSince: 'Enero 2020',
    image: 'https://images.unsplash.com/photo-1603415526960-f8f0f1e5c0a3'
  };

  // temporal (luego lo llevamos a Firestore)
  aboutMe = `Soy un desarrollador full stack con una fuerte pasión...`;

  @ViewChild('editarPerfilModal') editarPerfilModal!: EditarPerfilComponent;
  @ViewChild('editarSobreMiModal') editarSobreMiModal!: EditarSobremiComponent;

  // ... su constructor con modalService ya inyectado

  guardarPerfil(payload: any) {
    console.log('[PerfilComponent] guardarPerfil()', payload);

    // Por ahora: actualizar en memoria para ver el cambio reflejado en la UI
    this.user = { ...this.user, ...payload };

    // Cerrar modal (mismo patrón que Proyectos)
    this.editarPerfilModal.close();
  }

  guardarSobreMi(payload: { aboutMe: string }) {
    console.log('[PerfilComponent] guardarSobreMi()', payload);

    this.aboutMe = payload.aboutMe;

    // Cerrar modal
    this.editarSobreMiModal.close();
  }
  openEditarPerfil() {
  this.modalService.openEditarPerfil({ user: this.user });
}

openEditarSobreMi() {
  this.modalService.openEditarSobreMi({ aboutMe: this.aboutMe });
}
}
