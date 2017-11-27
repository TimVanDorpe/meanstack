import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {UserService} from './services/users.service';

@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[TaskService , UserService]
})
export class AppComponent {}