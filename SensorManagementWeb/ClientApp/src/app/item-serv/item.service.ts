import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  itemsForFloors: Observable<Item[]>;
  items: Observable<Item[]>;
  floor$: BehaviorSubject<number>;
  sensor$: BehaviorSubject<string>;
  floors$: number[];

  constructor(public afs: AngularFirestore) {
    // Initial floor set
    this.sensor$ = new BehaviorSubject('');
    this.floor$ = new BehaviorSubject(1);
    this.items = this.floor$.pipe(
        switchMap(flr => this.afs
          .collection('Sensors', ref => ref
          .where('floor', '==', flr ))
          .valueChanges())
    );

    this.itemsForFloors = this.afs.collection('Sensors').valueChanges();
  }

  getAllFloors() {
    this.floors$ = [];
    this.itemsForFloors.forEach(ex => {
      ex.forEach(ex2 => {
        if (this.floors$.indexOf(ex2.floor) === -1) {
          this.floors$.push(ex2.floor);
        }
      });
    });
    this.floors$.sort();
    return this.floors$;
  }

  getItems() {
    return this.items;
  }

  changeFloor(x: number) {
      this.floor$.next(x);
  }

  getFloor() {
    return this.floor$.getValue();
  }
}



