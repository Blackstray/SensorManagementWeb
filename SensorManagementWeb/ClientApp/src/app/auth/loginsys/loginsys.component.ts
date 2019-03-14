import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginsys',
  templateUrl: './loginsys.component.html',
  styleUrls: ['./loginsys.component.css']
})
export class LoginsysComponent implements OnInit {

  user: firebase.User;

  constructor(
    private service: LoginService, private router: Router

  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
      });
  }

  loginGoogle() {
    console.log('Login...');
    this.service.login();
    this.router.navigate(['main-nav']);
  }

  logout() {
    this.service.logout();
  }

}
