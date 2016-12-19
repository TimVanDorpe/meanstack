import { Component } from '@angular/core';
import {UserService} from '../../services/users.service';
import {User} from '../../../User';


@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html'
})

export class UserComponent { 
    users: User[]; 
    
    constructor(private userService:UserService){
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
    
}