import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../item-serv/item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  panelOpenState = false;
  items: Item[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private itemService: ItemService) {}
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      // console.log(items);
      // this.items.toString();
    });
  }
}
