import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  url = 'http://localhost:3000/api/'
  constructor(private http:HttpClient){}

  getUsersList(){
    return this.http.get(this.url+"users")
  }

}
