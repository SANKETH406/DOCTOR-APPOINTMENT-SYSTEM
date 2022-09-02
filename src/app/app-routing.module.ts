import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdmincancelComponent } from './pages/admincancel/admincancel.component';
import { AdminfeedbackComponent } from './pages/adminfeedback/adminfeedback.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegComponent } from './pages/reg/reg.component';
import { SupportComponent } from './pages/support/support.component';
import { UserbookingsComponent } from './pages/userbookings/userbookings.component';
import { UserdataComponent } from './pages/userdata/userdata.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'support',component:SupportComponent},
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'userbookings',component:UserbookingsComponent},
  {path:'admincancel',component:AdmincancelComponent},
  {path:'adminfeedback',component:AdminfeedbackComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
