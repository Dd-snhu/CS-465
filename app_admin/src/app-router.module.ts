import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { TripListingComponent } from "./app/trip-listing/trip-listing.component";
import { AddTripComponent } from "./app/add-trip/add-trip.component";
import { EditTripComponent } from "./app/edit-trip/edit-trip.component";
//import { DeleteTripComponent } from "./app/delete-trip/delete-trip.component";
import { LoginComponent } from "./app/login/login.component";
import { HomeComponent } from "./app/home/home.component";


const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent},
    { path: 'edit-trip', component: EditTripComponent},
    //{ path: 'delete-trip', component: DeleteTripComponent},
    { path: 'login', component: LoginComponent},
    { path: 'listtrips', component: TripListingComponent},
    

    { path: '', component: HomeComponent, pathMatch: 'full'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
