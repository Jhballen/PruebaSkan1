import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Torre } from '../models/torre.model';

@Injectable({
  providedIn: 'root'
})
export class TorresService {

  constructor(private http: HttpClient) { }

  consultarTorres (): Observable<Torre[]> {
    return this.http.get <Torre []>(`https://apireporteoperaciones.azurewebsites.net/api/Tower`);
  }
}
