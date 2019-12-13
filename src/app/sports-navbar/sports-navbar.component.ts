import { Component, OnInit, Input } from '@angular/core';
import { OddsApiService } from '../services/odds-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports-navbar',
  templateUrl: './sports-navbar.component.html',
  styleUrls: ['./sports-navbar.component.css']
})
export class SportsNavbarComponent implements OnInit {
  navbarSports: string[];
  currentJustify = 'center';
  constructor( 

    private oddsApiService: OddsApiService
    ){ };

  ngOnInit() {
    this.getSportNavbar();

  }

  private getSportNavbar(){
    this.oddsApiService.getSports().subscribe(d=> this.navbarSports = d);
  }
}
