import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {Page404Component} from "./page-404/page-404.component";
import {PageSupportComponent} from "./page-support/page-support.component";
import {PageRankComponent} from "./page-rank/page-rank.component";
import {PagePlayerComponent} from "./page-player/page-player.component";
import { PageUserComponent } from './page-user/page-user.component';
import {PageCguComponent} from "./other-page/page-cgu/page-cgu.component";
import {PageCgvComponent} from "./other-page/page-cgv/page-cgv.component";
import {PageRecrutementComponent} from "./other-page/page-recrutement/page-recrutement.component";
import {PageTermsComponent} from "./other-page/page-terms/page-terms.component";

export const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'rank', component: PageRankComponent },
  { path: 'support', component: PageSupportComponent },
  { path: 'player/:pseudo', component: PagePlayerComponent },
  { path: 'panel', component: PageUserComponent},
  { path: 'panel/login', component: PageUserComponent},
  { path: 'panel/register', component: PageUserComponent},
  { path: 'panel/skin', component: PageUserComponent},
  { path: 'panel/cape', component: PageUserComponent},
  { path: 'terms', component: PageTermsComponent},
  { path: 'cgu', component: PageCguComponent},
  { path: 'cgv', component: PageCgvComponent},
  { path: 'recruiting', component: PageRecrutementComponent},
  { path: '**', component: Page404Component },
];
