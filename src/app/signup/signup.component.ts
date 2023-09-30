import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, } from '@angular/forms'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

public signupForm !: FormGroup;
constructor(private formbuilder : FormBuilder, private http : HttpClient, private router : Router){

} 

ngOnInit(): void {
  // throw new Error('Method not implemented.');
this.signupForm = this.formbuilder.group({
firstname : ['', Validators.compose([Validators.required])],
lastname : ['', Validators.compose([Validators.required])],
gender : ['', Validators.compose([Validators.required])],
email : ['', Validators.compose([Validators.required, Validators.email])],
phoneno : ['', Validators.compose([Validators.required])],
password : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
// repeat : ['', Validators.compose([Validators.required])],
}, 
// {
// Validator: CustomValidators.passwordMatchValidator

// }
)   
}
 
signup(){
this.http.post<any>('http://localhost:3000/SignupUsers', this.signupForm.value)
.subscribe(res => {

  alert("Signup Successfull !");
  this.signupForm.reset();
  this.router.navigate(['login'])
}, err=>{ alert("Something went wrong")
} 
 )

}
}
