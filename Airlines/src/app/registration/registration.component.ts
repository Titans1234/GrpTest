import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user : User ;

  constructor( ) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

}
