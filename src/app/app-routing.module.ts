import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { ProyectosComponent } from './screens/proyectos/proyectos.component';
import { LayoutComponent } from './partials/layout/layout.component';
import { PerfilComponent } from './screens/perfil/perfil.component';
import { HabilidadesComponent } from './screens/habilidades/habilidades.component';
import { ExperienciaComponent } from './screens/experiencia/experiencia.component';
import { ConfiguracionComponent } from './screens/configuracion/configuracion.component';


//Rutas publicas
const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'registro', component: RegistroComponent},

  //Rutas con layout
  {path: '', component: LayoutComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
        data: { title: 'Perfil' }
      },
      {
        path: 'proyectos',
        component: ProyectosComponent,
        data: {
          title: 'Mis Proyectos',
          subtitle: '4 proyectos en tu portafolio',
          action: 'Agregar Proyecto'
        }
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent,
        data: { title: 'Habilidades' }
      },
      {
        path: 'experiencia',
        component: ExperienciaComponent,
        data: { title: 'Experiencia' }
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
        data: { title: 'Configuración' }
      }
    ]
  },

   { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
