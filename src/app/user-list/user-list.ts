import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {

  userList: any[] = [];

  constructor(private _user: User) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._user.getUsersList().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.userList = resp.result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
