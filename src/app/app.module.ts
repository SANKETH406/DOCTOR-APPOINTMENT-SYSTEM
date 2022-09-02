import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { LoginComponent } from './pages/login/login.component';
import { RegComponent } from './pages/reg/reg.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { AdmincancelComponent } from './pages/admincancel/admincancel.component';
import { UserdataComponent } from './pages/userdata/userdata.component';
import { AdminfeedbackComponent } from './pages/adminfeedback/adminfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SupportComponent,
    LoginComponent,
    RegComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdmincancelComponent,
    UserdataComponent,
    AdminfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
