import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from 'Services/Auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router : Router, public authcontext : Authservice ){}
  logout(pagename:string):void{
    this.router.navigate([`${pagename}`])
    alert('Logout Successfully')	
    localStorage.removeItem('token')
    // localStorage.clear()
      }

}
