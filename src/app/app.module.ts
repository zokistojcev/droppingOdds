import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DroppingRowComponent } from './dropping-row/dropping-row.component';
import { OddsApiService } from './services/odds-api.service';
import { Routes, RouterModule } from '@angular/router';
import { SportsNavbarComponent } from './sports-navbar/sports-navbar.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipContentComponent } from './tooltip/tooltip-component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipModule } from "ngx-tooltip";
import { AllOddsDirective } from './all-odds.directive';
import { AllOddsComponent } from './all-odds/all-odds.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LeftColumnComponent } from './left-column/left-column.component';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { ShowAllOddsComponent } from './dropping-row/show-all-odds/show-all-odds.component';
import { NgbdDropdownBasicComponent } from './ngbd-dropdown-basic/ngbd-dropdown-basic.component';
import { TimeagoModule } from 'ngx-timeago';
import { OddNavbarComponent } from './dropping-row/odd-navbar/odd-navbar.component';
import { TournamentPairsComponent } from './tournament-pairs/tournament-pairs.component';






const AppRoutes: Routes  = [
  // {path: "", component: AppComponent},
  // {path: 'sportsnavbar/:sport', component: SportsNavbarComponent},
  {path: 'sportsnavbar/:sport', component: DroppingRowComponent},
  // {path: 'sports/all', component: DroppingAverageComponent},
  // {path: 'zoki/all', component: ExampleComponent},
  {path: 'sportsnavbar/:sport/:tournament', component: DroppingRowComponent},
  {path: 'tour/:tournament', component: TournamentPairsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DroppingRowComponent,
    SportsNavbarComponent,
    TooltipContentComponent,
    TooltipDirective,
    AllOddsDirective,
    AllOddsComponent,
    LeftColumnComponent,
    TournamentsListComponent,
    TournamentPairsComponent,
    ShowAllOddsComponent,
    NgbdDropdownBasicComponent,
    OddNavbarComponent
  ],
  imports: [
    OverlayModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    TimeagoModule.forRoot()
  ],
  providers: [
     OddsApiService
    ],
  bootstrap: [AppComponent,
    // NgbdDropdownBasicComponent
    ],
  entryComponents: [AllOddsComponent],
  
})
export class AppModule { }
