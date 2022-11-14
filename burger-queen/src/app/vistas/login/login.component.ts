import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any) {
    this.api.loginByEmail(form).subscribe(data => {
      console.log(data);
      const accTkn = data.token;

      localStorage.setItem('token', accTkn)

      if (accTkn == "Mesero") {
        this.router.navigate(['mesero'])
      }
      if(accTkn == "Cocinero") {
        this.router.navigate(['cocinero'])
      }
      if(accTkn == "Admin") {
        this.router.navigate(['admin'])
      }
      else{
        alert("Usuario no registrado")
      }


      

    })
    /*console.log(form.email, form.password)
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
    });*/

  }

}
