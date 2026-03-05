import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent {

  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      nombre: ['John', Validators.required],
      apellido: ['Doe', Validators.required],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      titulo: ['Full Stack Developer']
    });
  }

  guardarCambios() {
    if (this.accountForm.valid) {
      console.log('Datos guardados:', this.accountForm.value);
      alert('Cambios guardados correctamente');
    }
  }

  toggleTema(event: any) {
  const activo = event.target.checked;

  if (activo) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('tema', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('tema', 'light');
  }
}

ngOnInit() {
  const temaGuardado = localStorage.getItem('tema');

  if (temaGuardado === 'dark') {
    document.body.classList.add('dark-theme');
  }
}
}
