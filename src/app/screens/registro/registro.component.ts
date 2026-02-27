import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {


  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.name || !this.email || !this.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    console.log('Usuario registrado:', {
      name: this.name,
      email: this.email
    });

    // Aquí iría tu llamada al backend

    this.router.navigate(['/login']);
  }

}
