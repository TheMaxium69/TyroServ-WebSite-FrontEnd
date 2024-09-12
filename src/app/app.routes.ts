import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {Page404Component} from "./page-404/page-404.component";
import {PageSupportComponent} from "./page-support/page-support.component";
import {PageRankComponent} from "./page-rank/page-rank.component";
import {PagePlayerComponent} from "./page-player/page-player.component";
import { PageUserComponent } from './page-user/page-user.component';

export const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'rank', component: PageRankComponent },
  { path: 'support', component: PageSupportComponent },
  { path: 'player/:pseudo', component: PagePlayerComponent },
  { path: 'panel', component: PageUserComponent},
  { path: 'panel/login', component: PageUserComponent},
  { path: 'panel/register', component: PageUserComponent},
  { path: '**', component: Page404Component },
];
