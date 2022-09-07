import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';

import { LoginComponent } from './pages/login/login.component';
import { RegComponent } from './pages/reg/reg.component';

imports:[
LoginComponent,
RegComponent,
AdminloginComponent
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
