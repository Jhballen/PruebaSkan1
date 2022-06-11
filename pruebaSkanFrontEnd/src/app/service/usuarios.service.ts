import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  consultarUsuarios (): Observable<User[]> {
    return this.http.get <User []>(`https://apireporteoperaciones.azurewebsites.net/api/User/basicUsers`);
  }
}
