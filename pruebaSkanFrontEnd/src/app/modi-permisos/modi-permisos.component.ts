import { Component, OnInit } from '@angular/core';
import { Permiso } from '../models/permiso.model';
import { Torre } from '../models/torre.model';
import { User } from '../models/user.model';
import {UsuariosService} from '../service/usuarios.service';
import {TorresService} from '../service/torres.service';
import {PermisosService} from '../service/permisos.service';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-modi-permisos',
  templateUrl: './modi-permisos.component.html',
  styleUrls: ['./modi-permisos.component.css']
})
export class ModiPermisosComponent implements OnInit {

  usuarios: User[];
  selectedUser: User;

  torres: Torre [];
  selectedTorre: Torre;

  modiPermiso: Permiso;
  constructor(private UsuariosService: UsuariosService, private TorresService:TorresService, private PermisosService:PermisosService) {
    this.modiPermiso = new Permiso ();

  this.usuarios = new Array <User> ();
   this.selectedUser = new User ();

   this.torres = new Array <Torre> ();
   this.selectedTorre = new Torre ();
 
   }


 ngOnInit(): void {

    this.modiPermiso= environment.selectedPermiso;
    this.UsuariosService.consultarUsuarios().subscribe(usuarios =>{
    this.usuarios = usuarios;
   });

   this.TorresService.consultarTorres().subscribe( torres => {
     this.torres = torres;
   });
 }


 modificar () {
  this.modiPermiso.idUser = this.selectedUser.id;
  this.modiPermiso.idTower = this.selectedTorre.id;
  this.modiPermiso.idUserLogin = environment.user.id;
  console.log(this.modiPermiso);
  this.PermisosService.modificarPermiso(this.modiPermiso);
 }

 eliminar () {
  this.PermisosService.eliminarPermiso(this.modiPermiso);
 }
}
