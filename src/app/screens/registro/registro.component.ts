import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {


  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

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


  async onRegister() {
  try {
    await this.authService.register(
      this.name,
      this.email,
      this.password
    );

    alert("Cuenta creada 🎉");

    this.router.navigate(['/proyectos']);
  } catch (error: any) {
    alert(error.message);
  }
}

}
