import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'; uncomment to disable Material Animations

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/auth/login/login.component';
import { SignupComponent } from './components/home/auth/signup/signup.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AlertComponent } from './components/alert/alert.component';
import { CommunityComponent } from './components/community/community.component';

>>>>>>> 57c55e2407a29531e11cd97f125d1b0d4aaeee06



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    BrowserAnimationsModule
=======
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    NgbModule
    
>>>>>>> 57c55e2407a29531e11cd97f125d1b0d4aaeee06
=======
    NgbModule,
    BrowserAnimationsModule
    // NoopAnimationsModule uncomment this to disable Material Animations
>>>>>>> 7584b347f21a15deaa5fae279be7e93397f1393b
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ SignupComponent ]
})
export class AppModule { }
