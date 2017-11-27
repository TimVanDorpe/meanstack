import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import { AppComponent }  from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {UserComponent} from './components/users/users.component';


@NgModule({
  imports:      [ BrowserModule , HttpModule , FormsModule],
  declarations: [ AppComponent , TasksComponent , UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }