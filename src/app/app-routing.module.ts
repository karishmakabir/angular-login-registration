import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LoginComponent } from './pages/login/login.component';
import { NewpassComponent } from './pages/newpass/newpass.component';
import { OtppasswordComponent } from './pages/otppassword/otppassword.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



const routes: Routes = [
   
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'otp-password', component: OtppasswordComponent },
  { path: 'create-password', component: NewpassComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
