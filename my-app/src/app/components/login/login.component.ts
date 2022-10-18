import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// tenemos que injectar en el contructor el servicio router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    
  this.router.navigate(['/home'])
  }
}
