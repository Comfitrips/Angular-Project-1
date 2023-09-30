import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-flight',
  templateUrl: './booking-flight.component.html',
  styleUrls: ['./booking-flight.component.css']
})
export class BookingFlightComponent {

  flights = [
    {id:1, name:'Air France', from: '02:10 Mumbai', time:'14h 55m 1 stop via cairo', to:'08:10 Paris', 
     available:'Tickets Available', Price:'₹ 77,165 per traveller'},
    
     
      ];

      flight1 = [
        {id:2, namen:'EgyptAir', fromf: '03:00 Mumbai', timet:'09h 30m', too:'14:25 Paris', 
        availablea:'Tickets Available', Pricep:'₹ 52,311 per traveller'},
       

      ]

      public show:boolean = false;
      public buttonName:any = 'Show Details'

      public show1:boolean = false;
      public buttonName1:any = 'Show Details'
      toggle() {
        this.show = !this.show;
    
        // Change the name of the button.
        if(this.show)  
          this.buttonName = "Hide Details";
        else
          this.buttonName = "Show Details";
      }

      toggle1() {
        this.show1 = !this.show1;
    
        // Change the name of the button.
        if(this.show1)  
          this.buttonName1 = "Hide Details";
        else
          this.buttonName1 = "Show Details";
      }

}
  