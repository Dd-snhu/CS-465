import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { TripDataService } from 'services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from 'models/trip';


@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css'],
  providers: [TripDataService]
})
export class DeleteTripComponent implements OnInit {
  submitted = false;
  trip: Trip[];
  message: string;

  constructor(
    private router: Router,
    private tripService: TripDataService,
    private tripCard: TripCardComponent
    )
    { }
  private getTripCardInfo(): void{
    let tripCode = localStorage.getItem("tripCode");
    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);
    this.tripService
    .getTrip(tripCode)
    .then(foundTrip => {
      this.trip = foundTrip;

    })
    
  }
   

    
      

   
  ngOnInit() {
    this.getTripCardInfo();
        
  }

  onSubmit() {    
    this.submitted = true;
    

}
}

