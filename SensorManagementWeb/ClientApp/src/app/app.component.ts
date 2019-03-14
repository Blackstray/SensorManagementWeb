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

}
