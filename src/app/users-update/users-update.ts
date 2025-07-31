import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-users-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-update.html',
  styleUrl: './users-update.scss'
})
export class UsersUpdate {
  userForm!: FormGroup;
  data: any | undefined
  constructor(private _userService: User, private _actRoute:ActivatedRoute) {

    const id  = this._actRoute.snapshot.paramMap.get('id')
    if(id){
      console.log(id)
      this.getData(id)
    }

   
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      Contact: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      skill: new FormControl('')
    });
  }

  submit() {
    console.log(this.userForm.value);
    this._userService.createUser(this.userForm.value).subscribe({
      next: (resp) => {
        this.userForm.reset();
        alert("Submitted Successfully");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getData(id:any){
    this._userService.getUserbyId(id).subscribe({next:(resp:any)=>{
      console.log(resp);
      this.data = resp.result;
        this.userForm = new FormGroup({
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      Contact: new FormControl(this.data.Contact),
      age: new FormControl(this.data.age),
      gender: new FormControl(this.data.gender),
      skill: new FormControl(this.data.skill)
    });


    },error:(err)=>{
      console.log(err);
    }})
  }
}
