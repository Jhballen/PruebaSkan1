import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { User } from '../models/user.model';
import { LoginService } from '../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: User [];
  userName: string;
  password: string;
  userDB: User;
  link: string;

  constructor(private LoginService: LoginService) {
    this.usuarios = new Array();
    this.userName = '';
    this.password = ''
    this.userDB = new User();
    this.link = '';
  }

  ngOnInit(): void {
    this.LoginService.buscarUsuarios().subscribe((users) => {
      this.usuarios = users;
    }) 
  }

  loguear () {

    
    this.usuarios.forEach(user => {
     
      if(user.userLogin == this.userName) {
        this.userDB = user;
      }
    });

    console.log(this.userDB);
    if (this.userDB.password == this.password && this.userDB.charge === "SUPERVISOR") {
      this.link = "/supervisor";
      environment.user = this.userDB;
    } else if (this.userDB.password == this.password && this.userDB.charge.includes('JEFE')) {
      this.link = "/jefe"
      environment.user = this.userDB;
    } else {
      console.log("Contraseña o usuario incorrecto");
    }

  }

}
