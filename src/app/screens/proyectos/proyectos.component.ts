import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
    projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Mobile Banking App',
      description: 'Aplicación móvil de banca digital con autenticación biométrica y transferencias en tiempo real.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      githubLink: 'https://github.com'
    }
  ];

  onEdit(project: Project) {
    console.log('Editar', project);
  }

  onDelete(project: Project) {
    this.projects = this.projects.filter(p => p !== project);
  }

}
