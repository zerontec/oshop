import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/observable';
import { AppUser} from './app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  implements CanActivate{

  constructor( private auth: AuthService, private userService: UserService) { }

  canActivate() : Observable <boolean> {

   return this.auth.appUser$
  .map( appUser => appUser.isAdmin);

  }
}
