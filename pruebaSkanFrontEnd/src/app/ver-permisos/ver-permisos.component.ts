import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePageEvent } from '@angular/material/table';
import { environment } from '../environment/environment';
import { Permiso } from '../models/permiso.model';
import {PermisosService} from '../service/permisos.service';

@Component({
  selector: 'app-ver-permisos',
  templateUrl: './ver-permisos.component.html',
  styleUrls: ['./ver-permisos.component.css']
})
export class VerPermisosComponent implements OnInit {

  permisos: Array <Permiso> ;
  displayedColumns = ['id', 'startDate', 'endDate', 'typeReport', 'idUserLogin', 'description' ];
  dataSource!: MatTableDataSource <any>;
  selectedPermiso: Permiso;
  constructor(private PermisosService: PermisosService) { 
    this.permisos = new Array <Permiso> ();
    this.selectedPermiso = new Permiso ();
  }

  
  ngOnInit(): void {
    this.PermisosService.buscarPermisos().subscribe((permiso) => {
      this.permisos = permiso;
      });
      this.dataSource = new MatTableDataSource (this.permisos);
    }


    cargar() {
      this.PermisosService.buscarPermisos().subscribe((permiso) => {
        this.permisos = permiso;
        console.log(this.permisos);
        });
        this.dataSource = new MatTableDataSource (this.permisos);
      }

      seleccionar(element: Permiso) {
        environment.selectedPermiso = element;
      }
      
}
  


