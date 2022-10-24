import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form : any){
    
    console.log(form.email, form.password)
     this.http.get<any>("http://localhost:3000/auth", {
      headers: {
        Authorization: "Bearer EsUnSecreto"
      }
    }).subscribe(res =>{
       const user =res.find((a:any)=>{return a.email==form.email && a.password==form.password})

       if(user){
        this.router.navigate(['mesero'])
      
      }else{
        alert("Usuario no encontrado")
      
      }
    });
    
  }

}
