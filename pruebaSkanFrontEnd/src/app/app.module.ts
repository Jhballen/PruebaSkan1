import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PrincipalSupervisorComponent } from './principal-supervisor/principal-supervisor.component';
import { PrincipalJefeComponent } from './principal-jefe/principal-jefe.component';

//Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

//prime ng imports
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';

//http clñient
import {HttpClientModule} from '@angular/common/http';
import { VerPermisosComponent } from './ver-permisos/ver-permisos.component';
import { CrearPermisoComponent } from './crear-permiso/crear-permiso.component';
import { ModiPermisosComponent } from './modi-permisos/modi-permisos.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalSupervisorComponent,
    PrincipalJefeComponent,
    VerPermisosComponent,
    CrearPermisoComponent,
    ModiPermisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    CalendarModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
