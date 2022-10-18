import { NgIfContext } from '@angular/common';
import { Component} from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  token = '';

  constructor(
    private usersService: UsersService
  ) {

  }

  onLoaded(token: string) {
    console.log('loadPadre', token);
    this.token = token;
  }

  createUser() {
    this.usersService.create(this.token,{
      name: 'Stefani',
      email: 'iam@fakel.lol',
      password: 'apasswordtochange'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
