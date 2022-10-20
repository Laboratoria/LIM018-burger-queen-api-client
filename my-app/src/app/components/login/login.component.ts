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
    .subscribe(rta => {
      console.log(rta.token);
      this.router.navigate(['/home'])
    });
  }
}
// import { Component} from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   token = ''
//   email = 'iam@fakel.lol'
//   password = 'apasswordtochange'

// // tenemos que injectar en el contructor el servicio router
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   login() {
//     this.authService.login(this.email, this.password)
//     .subscribe(rta => {
//       console.log(rta.token);
//       this.token = rta.token;
//       // localStorage.setItem("token", rta.token)
//       // console.log('load hijo');
//       // this.loaded.emit(this.token);

//       this.router.navigate(['/home'])
//     });
//   }
// }
