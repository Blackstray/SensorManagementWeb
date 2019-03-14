
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// Material with Angular


import { AppRoutingModule, routingComponents } from './app-routing.module';
// Environment
import { environment } from '../environments/environment';
// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// Items from database
import { ItemService } from './item-serv/item.service';
import { LoginsysComponent } from './auth/loginsys/loginsys.component';
// Login System
import { LoginService } from './auth/login.service';
import { MaterialModule } from './material-module';







@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginsysComponent,
    routingComponents
  ],
  imports: [
    MaterialModule,
    // AngularFire
    AngularFireModule.initializeApp(environment.firebase, 'SensorManagementWeb'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NoopAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
