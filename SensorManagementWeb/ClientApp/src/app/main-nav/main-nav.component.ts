import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../item-serv/item.service';
import { Item } from '../models/Item';
import { LoginService } from '../auth/login.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  user: firebase.User;
  panelOpenState = false;
  items: Item[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private itemService: ItemService,
              private service: LoginService, private router: Router) {}
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
    this.service.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
    });
  }

  loginGoogle() {
    this.service.login();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['login']);
  }
}
