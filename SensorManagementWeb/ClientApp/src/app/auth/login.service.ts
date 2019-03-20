import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) {
  }

  login() {
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginAnon() {
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInAnonymouslyAndRetrieveData();
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }
}
