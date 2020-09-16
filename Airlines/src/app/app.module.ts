import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightSelectComponent } from './flight-select/flight-select.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightSelectComponent,
    RegistrationComponent,
    LoginComponent,
    PaymentComponent,
    CancellationComponent,
    SeatSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
