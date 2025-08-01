import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  
  constructor(
    private _user: User,
    private cdr: ChangeDetectorRef  
  ) {}
  
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this._user.getUsersList().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.userList = resp.result;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  deleteUser(id:any){
    console.log(id);
    const isConfirm = confirm("Confirm to delete user?")
    console.log(isConfirm);

    if(isConfirm){
      this._user.deleteUser(id).subscribe({next:(resp)=>{
        console.log(resp);
        alert("User Deleted Successfully")
        this.getData();
      },error:(err)=>{
        console.log(err);
      }})
    }
  }
}