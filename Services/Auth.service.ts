import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core"

@Injectable({

    providedIn: 'root'
})
export class Authservice  {
   
    LoggedIn(){

      return true
    }
 
    // login(){
    //     return false 
    // }
   }
//     constructor (private httpclient : HttpClient ) { }
// authuser(user:any){
//     let Signupuserarry =[];
//     if(localStorage.getItem('user')){
//         Signupuserarry= JSON.parse(localStorage.getItem('user'))

//     }
//     return Signupuserarry.find(p => p.email ===user.email && p.password === user.password );
// }

