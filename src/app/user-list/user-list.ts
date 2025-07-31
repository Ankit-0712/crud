import { Component } from '@angular/core';
import { User } from '../service/user';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [NgFor,RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {

  userList : any|undefined

  constructor(private _user:User){
    this.getData();
  }

  getData(){
    this._user.getUsersList().subscribe({next:(resp:any)=>{
      console.log(resp);
      this.userList = resp.result;
    },error:(err)=>{
      console.log(err);
      
    }})
  }
}
