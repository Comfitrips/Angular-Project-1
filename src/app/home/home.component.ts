import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from 'Services/Auth.service';
// import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
	
})
export class HomeComponent {

  thank(){
    alert('Thank you for your feedback !')
    this.router.navigate(['logout'])
  }

  header:string="/assets/banner.jpg";
header3:string="/assets/background img.jpg"
slogan:string="Travel Your Comfort"

sitename:string="ComfiTrips"

offer:string="/assets/easefly-30may-mob.png"

t1: string = '/assets/sea.jpg'
t2: string = '/assets/travelstory2.jpg'
t3: string = '/assets/travelstories3.jpg'

images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

constructor(private router : Router, public authcontext : Authservice ){} 

opened = true 



}
  


