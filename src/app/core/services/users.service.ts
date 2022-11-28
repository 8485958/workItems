import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users:User[]=[{id:0,name:"יהודה אבלס"},{id:0,name:"מנחם הר שושן"},{id:0,name:"מנחם עי מי"},{id:0,name:"משה בר שמחה"}];
  getUsers():User[]{
    return this.users;
  }
}
