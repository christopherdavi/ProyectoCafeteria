import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

import {LaravelApiService} from '../../services/api/laravel-api.service';
import {Router} from '@angular/router'
import { Login } from '../../models/login';
import { Response} from '../../models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //este método guarda el valor de los campos del formulario
  loginForm = new 
  FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:LaravelApiService, private router:Router) { }

  errorStatus:boolean = false

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  //revisar token
  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      // code...
      this.router.navigate(['productos'])
    }
  }

  //logaut de la app
  onLogaut(){
    localStorage.removeItem("id_user")
    localStorage.removeItem("token")
    this.router.navigate(['home'])
  }

  //Este método recibe los valores del formulario mediante el método ngSubmit
  onLogin(form:Login){
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:Response = data;
      if(dataResponse.status == "success"){
        localStorage.setItem("token", dataResponse.data.token);
        localStorage.setItem("user_id", dataResponse.data.id)
        this.router.navigate(['productos'])
      }else{
        this.errorStatus=true;
      }
      console.log(data);
    });
  }

}
