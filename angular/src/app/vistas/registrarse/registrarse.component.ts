import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Registrarse } from '../../models/registrarse';
import {Response} from '../../models/response';

import {LaravelApiService} from '../../services/api/laravel-api.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
//Recuperar los datos del formulario
  registroFrom = new 
  FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:LaravelApiService, private router:Router) { }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  //revisar el token guardado
  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      // code...
      this.router.navigate(['productos'])
    }
  }

  errorStatus:boolean = false;
  registrarse(form:Registrarse){
    this.api.registerUser(form).subscribe(data => {
      let dataResponse:Response = data;
      if(dataResponse.status == "success"){
        localStorage.setItem("token", dataResponse.data.token);
        localStorage.setItem("user_id", dataResponse.data.id);
        this.router.navigate(['perfil'])
      }else{
        this.errorStatus=true;
      }
      console.log(data)
    })
  }

}
