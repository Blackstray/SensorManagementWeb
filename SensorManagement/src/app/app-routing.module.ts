import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginsysComponent } from './auth/loginsys/loginsys.component';

const routes: Routes = [
  { path: 'main', component: MainNavComponent },
  { path: 'login', component: LoginsysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
