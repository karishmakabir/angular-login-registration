import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { OtppasswordComponent } from './pages/otppassword/otppassword.component';
import { NewpassComponent } from './pages/newpass/newpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './pages/materials/material.module';
import { AutherizationComponent } from './autherization/autherization.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ContactsComponent,
    OtppasswordComponent,
    NewpassComponent,
    AutherizationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.baseUrl },
    { provide: "Test_API_URL", useValue: environment.testUrl },
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
