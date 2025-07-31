import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-users-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-create.html',
  styleUrl: './users-create.scss'
})
export class UsersCreate {
  userForm!: FormGroup;

  constructor(private _userService: User, private router: Router) {
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
}
