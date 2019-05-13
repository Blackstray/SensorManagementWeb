import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/item-serv/item.service';
import { Item } from '../../models/Item';



@Component({
  selector: 'app-loginsys',
  templateUrl: './loginsys.component.html',
  styleUrls: ['./loginsys.component.css']
})
export class LoginsysComponent implements OnInit {
  items: Item[];
  user: firebase.User;

  constructor(
    private service: LoginService, private router: Router, private itemService: ItemService

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
  }

  logout() {
    this.service.logout();
  }
  anonLogin() {
    console.log('Login...');
    this.service.loginAnon();
    this.user.email = 'Anonymous';
    this.user.displayName = 'Logged in as anonymous user';
  }

}
