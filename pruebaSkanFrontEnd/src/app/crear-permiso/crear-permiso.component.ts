import { Component, OnInit } from '@angular/core';
import { Torre } from '../models/torre.model';
import { User } from '../models/user.model';
import {UsuariosService} from '../service/usuarios.service';
import {TorresService} from '../service/torres.service';
import {PermisosService} from '../service/permisos.service';
import { Permiso } from '../models/permiso.model';
import { environment } from '../environment/environment';


@Component({
  selector: 'app-crear-permiso',
  templateUrl: './crear-permiso.component.html',
  styleUrls: ['./crear-permiso.component.css']
})
export class CrearPermisoComponent implements OnInit {

  usuarios: User[];
  selectedUser: User;

  torres: Torre [];
  selectedTorre: Torre;

  nuevoPermiso: Permiso;
  constructor(private UsuariosService: UsuariosService, private TorresService:TorresService, private PermisosService:PermisosService) { 
    this.usuarios = new Array <User> ();
    this.selectedUser = new User ();

    this.torres = new Array <Torre> ();
    this.selectedTorre = new Torre ();

    this.nuevoPermiso = new Permiso ();
  }

  ngOnInit(): void {
    this.UsuariosService.consultarUsuarios().subscribe(usuarios =>{
     this.usuarios = usuarios;
    });

    this.TorresService.consultarTorres().subscribe( torres => {
      this.torres = torres;
    });
  }

  crearPermiso () {
    this.nuevoPermiso.idUserLogin = environment.user.id;
    this.nuevoPermiso.idUser = this.selectedUser.id;
    this.nuevoPermiso.idTower = this.selectedTorre.id;
    
    this.PermisosService.crearPermiso(this.nuevoPermiso);


  }

}
