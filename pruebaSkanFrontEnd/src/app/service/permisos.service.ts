import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permiso } from '../models/permiso.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http: HttpClient) { }

  buscarPermisos (): Observable<Permiso[]> {
    return this.http.get <Permiso []>(`https://apireporteoperaciones.azurewebsites.net/api/PermissionReport/getByTypeReport/Nomina`);
  }

  crearPermiso (nuevoPermiso: Permiso) {
    this.http.post(`https://apireporteoperaciones.azurewebsites.net/api/PermissionReport`, nuevoPermiso).subscribe(permiso => console.log(permiso));
  }

  modificarPermiso (modiPermiso: Permiso) {
    this.http.put(`https://apireporteoperaciones.azurewebsites.net/api/PermissionReport/${modiPermiso.id}` , modiPermiso).subscribe(permiso => console.log(permiso));
  }

  eliminarPermiso (deletePermiso: Permiso) {
    this.http.delete(`https://apireporteoperaciones.azurewebsites.net/api/PermissionReport/${deletePermiso.id}`).subscribe(permiso => console.log(permiso));
  }

}
