import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
  buscarUsuarios (): Observable<User[]> {
    return this.http.get <User []>(`https://apireporteoperaciones.azurewebsites.net/api/User/`);
  }

}
