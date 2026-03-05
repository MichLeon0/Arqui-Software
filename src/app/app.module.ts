import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

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
import { EliminarProyectoComponent } from './modals/eliminar-proyecto/eliminar-proyecto.component';
import { EditarPerfilComponent } from './modals/editar-perfil/editar-perfil.component';
import { EditarSobremiComponent } from './modals/editar-sobremi/editar-sobremi.component';

/* 🔥 ESTA PARTE VA AQUÍ, FUERA DEL @NgModule */
const firebaseConfig = {
  apiKey: "AIzaSyCj0AZaXTWc5AXBmafck1TWIEfxfvdVIgs",
  authDomain: "portafolio-profesional-2c6b0.firebaseapp.com",
  projectId: "portafolio-profesional-2c6b0",
  storageBucket: "portafolio-profesional-2c6b0.firebasestorage.app",
  messagingSenderId: "569614275432",
  appId: "1:569614275432:web:4b84d1eae0857abae63cdd"
};

@NgModule({
  declarations: [
    AppComponent,
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
    LayoutComponent,
    EditarPerfilComponent,
    EditarSobremiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    FormsModule,
    ProyectosComponent,
    EditarProyectoComponent,
    AgregarProyevtoComponent,
    ReactiveFormsModule,

    // 🔥 FIREBASE
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
