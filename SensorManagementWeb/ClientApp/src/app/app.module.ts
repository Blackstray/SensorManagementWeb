import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsComponent } from './item-comp/items/items.component';
import { ItemService } from './item-serv/item.service';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ItemsComponent
  ],
  imports: [
    MatBadgeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatCardModule,
    LayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatTooltipModule,
    MatTreeModule,
    AngularFireModule.initializeApp(environment.firebase, 'SensorManagementWeb'),
    AngularFirestoreModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
