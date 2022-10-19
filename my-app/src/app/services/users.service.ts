// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { User, CreateUserDTO } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `http://localhost:3000/users`;

  constructor(
    private http: HttpClient
  ) { }

  create(token:string, dto:CreateUserDTO) {
    return this.http.post<User>(this.apiUrl,dto,{
      headers:{
        Authorization : `Bearer ${token}`,
      }
    });
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
