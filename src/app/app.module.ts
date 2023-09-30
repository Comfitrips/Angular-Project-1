import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightComponent } from './flight/flight.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { RouterModule, Routes } from '@angular/router';
import { Authservice } from 'Services/Auth.service';
import { AuthGuard } from 'Services/Identity.service';
import { LogoutComponent } from './logout/logout.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingFlightComponent } from './booking-flight/booking-flight.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BlogComponent } from './blog/blog.component';

const appRoute: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
 
  {path:'login', component:LoginComponent  },
  {path:'signup',component:SignupComponent },
  {path:'logout',component:LogoutComponent   },
  {path:'home',component:HomeComponent    },
  {path:'dashboard',component:DashboardComponent },
  {path:'flight',component:FlightComponent },
  {path:'holidays',component:HolidaysComponent },
  {path:'book',component:BookingFlightComponent },
  {path:'form',component:FormComponent },
  {path:'contact',component:ContactUsComponent },
  {path:'privacy',component:PrivacyPolicyComponent },
  {path:'blog',component:BlogComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    // DashboardComponent,
    HomeComponent,
    DashboardComponent,
    FlightComponent,
    HolidaysComponent,
    LogoutComponent,
    BookingFlightComponent,
    FormComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
   
  ],
  exports : [RouterModule],
  providers:  [Authservice, {provide:AuthGuard, useClass:AuthGuard }],
  bootstrap: [AppComponent]
})
export class AppModule { }
