import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AppUser} from '../app-user';  //llevar a carpeta model 


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

appUser: AppUser;

  constructor(private auth: AuthService, ) {

    auth.appUser$.subscribe(appUser => this.appUser);
   }


  logout(){

this.auth.logout();

  }

}
