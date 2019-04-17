import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './auth/login.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ItemService } from './item-serv/item.service';
import { Item } from './models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: firebase.User;
  panelOpenState = false;
  items: Item[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private service: LoginService,
              private afAuth: AngularFireAuth, private router: Router, private itemService: ItemService) {

  }

  ngOnInit() {
    this.service.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
        if (!user) {
          this.router.navigate(['login']);
        } else { this.router.navigate(['main']); }
      });
    }

    loginGoogle() {
      this.service.login();
    }

    logout() {
      this.service.logout();
    }
}
