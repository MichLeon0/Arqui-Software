import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importación necesaria para navegar
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // Asegúrate de que solo estén los módulos que realmente usas
  imports: [CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  // Estado para alternar entre Login y Registro
  isLogin = true;


  // Inyectamos el Router aquí para poder usarlo en handleSubmit
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  // Cambia el estado del formulario
  toggleAuth(): void {
    this.isLogin = !this.isLogin;
  }

  // Simulación del envío del formulario
  handleSubmit(): void {
    console.log('Datos enviados:', {
      email: this.email,
      password: this.password,
    });

    // Ahora ya puedes navegar sin errores
    this.router.navigate(['/dashboard']);
  }

  irARegistro() {
  this.router.navigate(['/registro']);
  }

  irAproyectos() {
  this.router.navigate(['/proyectos']);
  }

  email: string = '';
password: string = '';

async onLogin() {
  try {
    await this.authService.login(this.email, this.password);
    alert("Bienvenido 🎉");

    this.router.navigate(['/proyectos']); // SOLO después de éxito
  } catch (error: any) {
    alert("Correo o contraseña incorrectos");
  }
}


}
