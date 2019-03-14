import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginsysComponent } from './auth/loginsys/loginsys.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'main', component: MainNavComponent },
  { path: 'app-loginsys', component: LoginsysComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const routingComponents = [TeamComponent];
