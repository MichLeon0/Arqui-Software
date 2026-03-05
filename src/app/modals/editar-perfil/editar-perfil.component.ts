import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit, OnDestroy {
    @Output() onSave = new EventEmitter<any>();

  isOpen = false;
  saving = false;

  private sub?: Subscription;

  // Campos del perfil (misma estructura que usted ya usa)
  userForm = {
    name: '',
    role: '',
    description: '',
    email: '',
    location: '',
    memberSince: '',
    image: ''
  };

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    // Ajuste el nombre del observable según su ModalService.
    // En su proyecto ya existe un patrón como openAgregar$, openEditar$, etc.
    // Aquí asumo que usted creó openEditarPerfil$.
    this.sub = this.modalService.openEditarPerfil$.subscribe((payload: any) => {
      this.isOpen = true;

      // Payload esperado: { user: {...} }
      const u = payload?.user ?? payload ?? {};

      this.userForm = {
        name: u.name ?? '',
        role: u.role ?? '',
        description: u.description ?? '',
        email: u.email ?? '',
        location: u.location ?? '',
        memberSince: u.memberSince ?? '',
        image: u.image ?? ''
      };
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  close(): void {
    this.isOpen = false;
    this.saving = false;
  }

  discard(): void {
    this.close();
  }

  submit(): void {
    // Validaciones mínimas (misma filosofía que Proyectos)
    if (!this.userForm.name.trim() || !this.userForm.role.trim()) {
      alert('Nombre y rol son obligatorios');
      return;
    }

    if (!this.userForm.email.trim()) {
      alert('El correo es obligatorio');
      return;
    }

    // (Opcional) validar email simple
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userForm.email.trim());
    if (!emailOk) {
      alert('El correo no tiene un formato válido');
      return;
    }

    // Si imagen viene no vacía, exigir http(s) para evitar 404 tipo localhost/xxx
    const img = this.userForm.image.trim();
    if (img && !(img.startsWith('http://') || img.startsWith('https://'))) {
      alert('La URL de la imagen debe iniciar con http:// o https://');
      return;
    }

    this.saving = true;

    // Emitir al padre; el padre es el que llama Firestore (igual que en proyectos)
    this.onSave.emit({ ...this.userForm });

    // No cerrar aquí si usted quiere cerrar solo cuando guarde OK.
    // Si desea el comportamiento de proyectos, cierre tras éxito desde el padre.
    // Por consistencia, lo dejamos abierto hasta que el padre cierre.
    this.saving = false;
  }

}
