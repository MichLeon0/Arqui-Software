import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

  habilidadesFrontend = [
    { nombre: 'React', nivel: 95 },
    { nombre: 'TypeScript', nivel: 90 },
    { nombre: 'Next.js', nivel: 85 },
    { nombre: 'Vue.js', nivel: 75 },
    { nombre: 'Tailwind CSS', nivel: 90 },
    { nombre: 'HTML5/CSS3', nivel: 95 }
  ];

   habilidadesBackend = [
    { nombre: 'Node.js', nivel: 90 },
    { nombre: 'Express', nivel: 85 },
    { nombre: 'NestJS', nivel: 80 },
    { nombre: 'Python', nivel: 75 },
    { nombre: 'GraphQL', nivel: 85 },
    { nombre: 'REST APIs', nivel: 95 }
  ];

   habilidadesDataBase = [
    { nombre: 'PostgreSQL', nivel: 85 },
    { nombre: 'MongoDB', nivel: 90 },
    { nombre: 'Redis', nivel: 75 },
    { nombre: 'MySQL', nivel: 80 }
  ];

  habilidadesDevOps = [
    { nombre: 'Docker', nivel: 85 },
    { nombre: 'AWS', nivel: 80 },
    { nombre: 'Git', nivel: 95 },
    { nombre: 'CI/CD', nivel: 75 },
    { nombre: 'Kubernetes', nivel: 70 }
  ];

  habilidadesDesign = [
    { nombre: 'Figma', nivel: 85 },
    { nombre: 'UI/UX', nivel: 80 },
    { nombre: 'Adobe XD', nivel: 70 }
  ];

  certificaciones = [
  {
    titulo: 'AWS Certified Developer',
    empresa: 'Amazon Web Services',
    anio: 2024,
    color: '#2563eb'
  },
  {
    titulo: 'React Advanced',
    empresa: 'Meta Certification',
    anio: 2023,
    color: '#16a34a'
  },
  {
    titulo: 'MongoDB Professional',
    empresa: 'MongoDB University',
    anio: 2023,
    color: '#9333ea'
  }
];

aprendiendo = [
  'Rust',
  'WebAssembly',
  'Machine Learning',
  'Web3',
  'Svelte'
];


}
