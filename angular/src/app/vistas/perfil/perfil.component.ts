import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { LaravelApiService } from 'src/app/services/api/laravel-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilFrom = new 
  FormGroup({
    cedula : new FormControl('', Validators.required),
    telefono : new FormControl('', Validators.required),
    direccion : new FormControl('', Validators.required),
    rol : new FormControl('cliente'),
    id_user: new FormControl(localStorage.getItem('id_user'))
  })
  
  constructor(private api:LaravelApiService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarPerfil(form:Perfil){
    this.api.crearPerfil(form).subscribe(data =>{
      this.router.navigate(['productos'])
      console.log(data);
    })
  }

}