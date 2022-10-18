import { Component, Output, EventEmitter} from '@angular/core';
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

  @Output() loaded = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email, this.password)
    .subscribe(rta => {
      console.log(rta.token);
      this.token = rta.token;
      console.log('load hijo');
      this.loaded.emit(this.token);
      this.router.navigate(['/home'])
    });
  }

}

