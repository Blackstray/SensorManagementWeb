import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  itemsForFloors: Observable<Item[]>;
  items: Observable<Item[]>;
  floor$: BehaviorSubject<number>;
  sensor$: BehaviorSubject<string>;
  floors$: number[];
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('Sensors');
    // Initial floor set
    this.sensor$ = new BehaviorSubject('');
    this.floor$ = new BehaviorSubject(1);
    this.items = this.floor$.pipe(
        switchMap(flr => this.afs
          .collection('Sensors', ref => ref
          .where('floor', '==', flr ))
          .snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Item;
              data.id = a.payload.doc.id;
              return data;
            });
          }))));

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

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
  deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`Sensors/${item.id}`);
    console.log('Deleted');
    console.log(item);
    console.log(item.id);
    this.itemDoc.delete();
  }
}



