import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarProyectoComponent } from './modals/editar-proyecto/editar-proyecto.component';
import { AgregarProyevtoComponent } from './modals/agregar-proyevto/agregar-proyevto.component';
import { EliminarExComponent } from './modals/eliminar-ex/eliminar-ex.component';
import { EditarExComponent } from './modals/editar-ex/editar-ex.component';
import { AgregarExComponent } from './modals/agregar-ex/agregar-ex.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { ProyectosComponent } from './screens/proyectos/proyectos.component';
import { PerfilComponent } from './screens/perfil/perfil.component';
import { HabilidadesComponent } from './screens/habilidades/habilidades.component';
import { ExperienciaComponent } from './screens/experiencia/experiencia.component';
import { ConfiguracionComponent } from './screens/configuracion/configuracion.component';
import { LayoutComponent } from './partials/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarProyectoComponent,
    AgregarProyevtoComponent,
    EliminarExComponent,
    EditarExComponent,
    AgregarExComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ConfiguracionComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    FormsModule,
    ProyectosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
