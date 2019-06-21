import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser} from './app-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private db: AngularFireDatabase) { }

  //salvo usuarios en la base de datos firebase

  save(user: firebase.User){

    this.db.object('/user/' + user.uid).update({

      name:user.displayName,
      email:user.email
    });
  }

//obtengo uid del usuario 
  get(uid: string): FirebaseObjectObservable<AppUser> {

    return this.db.object('/users/' + uid);
  }
}
