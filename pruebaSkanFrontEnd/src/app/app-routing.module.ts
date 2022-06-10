import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalJefeComponent } from './principal-jefe/principal-jefe.component';
import { PrincipalSupervisorComponent } from './principal-supervisor/principal-supervisor.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'supervisor', component: PrincipalSupervisorComponent},
  {path: 'jefe', component: PrincipalJefeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
