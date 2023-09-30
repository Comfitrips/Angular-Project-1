import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Authservice } from 'Services/Auth.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {

  [x: string]: any;
  
  public formvalue!: FormGroup
 
   constructor(private formbuilder: FormBuilder, private http : HttpClient, private router : Router, private authservice: Authservice){ }
   ngOnInit(): void {
     // throw new Error('Method not implemented.');
  this.formvalue = this.formbuilder.group({
   email: ['', Validators.compose([Validators.required])],
   password: ['',  Validators.compose([Validators.required])],
  
  })   
   }
//  login(){
//    this.http.get<any>('http://localhost:3000/SignupUsers')
//   .subscribe(res=> {
//    const user = res.find((a:any)=>{
//      return a.email === this.formvalue.value.email && a.password === this.formvalue.value.password })
//    if(user){
//      localStorage.getItem('token')
//      alert("Login Successfull !");  
//      // alert("Please fill password !");
//      this.formvalue.reset();
//      this.router.navigate(['home'])
//    } else{
//      alert("user not found !")
//    }
//   } ) 
 
//  }
 

}
