import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { User} from '../user.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usn :string ;
 psw: string ;
 user :User ;

  constructor() { }

  ngOnInit(): void {
  }

  search(usn:string){
 // this.user =  this.service.search(usn);
  }

}
