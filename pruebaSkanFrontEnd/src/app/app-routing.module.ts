import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPermisoComponent } from './crear-permiso/crear-permiso.component';
import { LoginComponent } from './login/login.component';
import { ModiPermisosComponent } from './modi-permisos/modi-permisos.component';
import { PrincipalJefeComponent } from './principal-jefe/principal-jefe.component';
import { PrincipalSupervisorComponent } from './principal-supervisor/principal-supervisor.component';
import { VerPermisosComponent } from './ver-permisos/ver-permisos.component';

const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'supervisor', component: PrincipalSupervisorComponent},
  {path: 'jefe', component: PrincipalJefeComponent},
  {path: 'verPermisos', component: VerPermisosComponent},
  {path: 'crearPermisos', component: CrearPermisoComponent},
  {path: 'modiPermisos', component: ModiPermisosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
