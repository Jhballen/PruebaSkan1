import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
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

    console.log(this.usuarios);

    this.usuarios.forEach(user => {
      if(user.user_login == this.userName) {
        this.userDB = user;
      }
    });

    if (this.userDB.password == this.password) {
      this.link = "/supervisor";
    }

  }

}
