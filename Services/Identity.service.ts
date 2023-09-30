import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core"
import {Authservice} from './Auth.service'
@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate  {
   
   constructor(private authservice : Authservice, private router : Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> |
     Promise<boolean> {
        if(this.authservice. LoggedIn()){
            return true 
        }
 this.router.navigate(['/login'])
 return false
        throw new Error("Method not implemented.");
     
    }

    

}