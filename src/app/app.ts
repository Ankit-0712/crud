import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserList,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crud';
}
