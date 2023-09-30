import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, } from '@angular/forms'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public FlightBook !: FormGroup;
constructor(private formbuilder : FormBuilder, private http : HttpClient, private router : Router){

}
ngOnInit(){

  this.FlightBook = this.formbuilder.group({})
}

  signup(){
    this.http.post<any>('http://localhost:3000/FlightBook', this.FlightBook.value)
    .subscribe(res => {
      alert('Your Payment is Successful. Thanks For Booking With Us. Visit again !');
    
      this.FlightBook.reset();
      this.router.navigate(['dashboard'])
    }, err=>{ alert("Something went wrong")
  } 
     )
    
    }
    // onBook(){


    //  alert('Your Payment is Successful. Thanks For Booking With Us. Visit again !')
    // this.router.navigate(['dashboard'])
      
  
    // }

}
