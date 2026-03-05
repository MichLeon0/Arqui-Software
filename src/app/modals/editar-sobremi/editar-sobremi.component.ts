import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-editar-sobremi',
  templateUrl: './editar-sobremi.component.html',
  styleUrls: ['./editar-sobremi.component.scss']
})
export class EditarSobremiComponent implements OnInit, OnDestroy {
  @Output() onSave = new EventEmitter<{ aboutMe: string }>();

  isOpen = false;
  saving = false;

  private sub?: Subscription;

  aboutMe = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    // Asumo que usted creó openEditarSobreMi$ en ModalService
    this.sub = this.modalService.openEditarSobreMi$.subscribe((payload: any) => {
      this.isOpen = true;
      this.aboutMe = (payload?.aboutMe ?? '').toString();
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
    if (!this.aboutMe.trim()) {
      alert('El campo "Sobre mí" no puede estar vacío');
      return;
    }

    this.saving = true;
    this.onSave.emit({ aboutMe: this.aboutMe.trim() });
    this.saving = false;
  }
}
