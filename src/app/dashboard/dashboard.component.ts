import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  userarry: any[] = []
  constructor(private http : HttpClient, private router : Router ){}

ngOnInit(): void {
  this.loadallUsers();
  this.bookingid0();
}

  loadallUsers(){

    this.http.get('http://localhost:3000/User').subscribe((res:any)=>{

    this.userarry = res;
    })
  }

  onDelete(obj:any){
  // obj.isDelete = true
this.userarry.splice(obj,1)

// this.router.navigate(['signup'])

  }


      
    
      bookingid: any[] = []

      bookingid0(){

        this.http.get('http://localhost:3000/FlightBook').subscribe((res:any)=>{
    
        this.bookingid = res;
        })
      }

      // onCancel(obj:any){
       
      //   this.bookingid.splice(obj,1)
      // }
      clickmsg = '';
      onClick(){
this.clickmsg = 'You have no travel history with us until now!'
      }
     
  }

