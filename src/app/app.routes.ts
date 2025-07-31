import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UsersCreate } from './users-create/users-create';
import { UsersUpdate } from './users-update/users-update';

export const routes: Routes = [
    
    {path:'',component:UserList},
    {path:'create',component:UsersCreate},
    {path:'update',component:UsersUpdate}


    
];
