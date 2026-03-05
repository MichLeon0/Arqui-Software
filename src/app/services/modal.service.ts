import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private openAgregarSource = new Subject<void>();
  openAgregar$ = this.openAgregarSource.asObservable();

  openAgregar() {
    this.openAgregarSource.next();
  }

  // ====== EDITAR PERFIL ======
  private openEditarPerfilSource = new Subject<any>();
  openEditarPerfil$ = this.openEditarPerfilSource.asObservable();

  openEditarPerfil(payload: any) {
    this.openEditarPerfilSource.next(payload);
  }

  // ====== EDITAR SOBRE MI ======
  private openEditarSobreMiSource = new Subject<any>();
  openEditarSobreMi$ = this.openEditarSobreMiSource.asObservable();

  openEditarSobreMi(payload: any) {
    this.openEditarSobreMiSource.next(payload);
  }
}
