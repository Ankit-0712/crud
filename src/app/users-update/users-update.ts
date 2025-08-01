import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-users-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-update.html',
  styleUrl: './users-update.scss'
})
export class UsersUpdate implements OnInit {
  userForm!: FormGroup;
  data: any | undefined;
  
  constructor(
    private _userService: User, 
    private _actRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    
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

  ngOnInit() {
    const id = this._actRoute.snapshot.paramMap.get('id');
    if (id) {
      console.log('User ID:', id);
      this.getData(id);
    }
  }

  submit() {
    console.log(this.userForm.value);
     const id = this._actRoute.snapshot.paramMap.get('id');
     this.userForm.value.id = id;
    this._userService.updateUser(this.userForm.value).subscribe({
      next: (resp) => {
        
        alert("Updated Successfully");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getData(id: any) {
    this._userService.getUserbyId(id).subscribe({
      next: (resp: any) => {
        console.log('User data received:', resp);
        this.data = resp.result;
        
        
        this.userForm.patchValue({
          firstName: this.data.firstName || '',
          lastName: this.data.lastName || '',
          email: this.data.email || '',
          Contact: this.data.Contact || '',
          age: this.data.age || '',
          gender: this.data.gender || '',
          skill: this.data.skill || ''
        });
        
       
        this.cdr.detectChanges();
        
        console.log('Form values after patch:', this.userForm.value);
      },
      error: (err) => {
        console.log('Error loading user:', err);
      }
    });
  }
}