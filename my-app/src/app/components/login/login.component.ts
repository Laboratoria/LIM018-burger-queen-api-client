import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token = ''
  email = 'iam@fakel.lol'
  password = 'apasswordtochange'

// tenemos que injectar en el contructor el servicio router
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email, this.password)
    .subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/pedidos'])
    });
  }
}

