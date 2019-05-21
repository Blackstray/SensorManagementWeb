import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-serv/item.service';
import { Item } from '../models/Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  counter: number;
  item: Item = {
    name: '',
    status: 'Active',
    type: '',
    floor: 1,
    power: 0,
    temperature: 0,
    amperage: 0,
    voltage: 0,
    power_u: 'kW',
    temperature_u: 'C',
    amperage_u: 'A',
    voltage_u: 'V',
    amperage_interval_ms: 3000,
    amperage_max: 100,
    amperage_min: 0,
    voltage_interval_ms: 3000,
    voltage_max: 250,
    voltage_min: 0,
    temperature_interval_ms: 3000,
    temperature_max: 150,
    temperature_min: -50,
    power_interval_ms: 3000,
    power_max: 5000,
    power_min: 0,
  }
  selected = this.item.status;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    if (this.item.name !== '' &&
       this.item.status !== '' &&
       this.item.floor !== null &&
       this.item.type !== ''){
      this.itemService.addItem(this.item);
      this.router.navigate(['main']);
    }
  }
  onExit(){
    this.router.navigate(['main']);
  }
}
