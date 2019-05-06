import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  floor$: BehaviorSubject<number>;
  floorMax$: number;
  floorMin$: number;

  constructor(public afs: AngularFirestore) {
    // Initial floor set
    this.floor$ = new BehaviorSubject(1);
    this.floorMax$ = 3;
    this.floorMin$ = 1;
    this.items = this.floor$.pipe(
        switchMap(flr => this.afs
          .collection('Sensors', ref => ref
          .where('floor', '==', flr))
          .valueChanges())
    );
  }

  getItems() {
    return this.items;
  }

  nextFloor() {
    if (this.floor$.getValue() + 1 <= this.floorMax$) {
    this.floor$.next(this.floor$.getValue() + 1);
    }
  }
  previousFloor() {
    if (this.floor$.getValue() - 1 >= this.floorMin$) {
    this.floor$.next(this.floor$.getValue() - 1);
    }
  }

  getFloor() {
    return this.floor$.getValue();
  }
}



