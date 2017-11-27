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
    name: string;
    username: string;
    password: string;

    
    constructor(private userService:UserService){
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

addUser(event){
        event.preventDefault();
        var newUser = {
            name: this.name,
            username : this.username,
            password : this.password
        }
        
        this.userService.addUser(newUser)
            .subscribe(user => {
                this.users.push(user);
                this.name = '',
                this.username = '',
                this.password = '';
            });
    }
    

    
}

