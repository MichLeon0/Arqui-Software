import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  user = {
    name: 'John Doe',
    role: 'Full Stack Developer',
    description: `Desarrollador apasionado con más de 5 años de experiencia en el desarrollo
    de aplicaciones web y móviles. Especializado en React, Node.js y arquitecturas
    escalables. Me encanta resolver problemas complejos y crear experiencias
    de usuario excepcionales.`,
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    memberSince: 'Enero 2020',
    image: 'https://images.unsplash.com/photo-1603415526960-f8f0f1e5c0a3'
  };

}
