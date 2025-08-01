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

  createUser(data:any){
    return this.http.post(this.url+"users",data)
  }

  getUserbyId(id: any){
    return this.http.get(this.url+"users/"+id)
  }

  updateUser(data:any){
    return this.http.put(this.url+"users",data)
  }

  deleteUser(id:any){
    return this.http.delete(this.url+"users/"+id)
  }

}
