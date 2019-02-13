import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http';

import { DroppingRowComponent } from './dropping-row/dropping-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DroppingTdComponent } from './dropping-td/dropping-td.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { OddsApiService } from './services/odds-api.service';
import { NavbarService } from './navbar/navbar.service';
import { Routes, RouterModule } from '@angular/router';
import { ZBetsComponent } from './z-bets/z-bets.component';
import { SportsNavbarComponent } from './sports-navbar/sports-navbar.component';
import { NgbdTabsetJustifyComponent } from './ngbd-tabset-justify/ngbd-tabset-justify.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const AppRoutes: Routes  = [
  // {path: "", component: AppComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "zbets", component: ZBetsComponent},
  {path: 'sportsnavbar/:sport', component: SportsNavbarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DroppingRowComponent,
    NavbarComponent,
    DroppingTdComponent,
    NavbarItemComponent,
    ZBetsComponent,
    SportsNavbarComponent,
    NgbdTabsetJustifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    TestServiceService,
     OddsApiService,
     NavbarService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
