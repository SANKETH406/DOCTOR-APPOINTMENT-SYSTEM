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
import { AdminfeedbackComponent } from './pages/adminfeedback/adminfeedback.component';
import { UserbookingsComponent } from './pages/userbookings/userbookings.component';
import { AppointmentbookingComponent } from './pages/appointmentbooking/appointmentbooking.component';
import { UsercancellationsComponent } from './pages/usercancellations/usercancellations.component';

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
    AdminfeedbackComponent,
    UserbookingsComponent,
    AppointmentbookingComponent,
    UsercancellationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
