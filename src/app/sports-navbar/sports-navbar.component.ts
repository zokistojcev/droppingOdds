import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OddsApiService } from '../services/odds-api.service';
import { Odd } from '../models/odd.model';
import { TestServiceService } from '../test-service.service';
import { SportsNAvbar } from '../models/sportsNavbar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sports-navbar',
  templateUrl: './sports-navbar.component.html',
  styleUrls: ['./sports-navbar.component.css']
})
export class SportsNavbarComponent implements OnInit, OnDestroy {
  oddsSports: Odd[];
  navbarSports: string[];
  zoki: Subscription; 
  currentJustify = 'center';
  constructor( 
    private route: ActivatedRoute, 
    private oddsApiService: OddsApiService,
    private testServiceService: TestServiceService ){ };

  ngOnInit() {
    this.getSportNavbar();
    this.zoki = this.route.params.subscribe(p=>this.getSportUrl(p["sport"]));
  }

  ngOnDestroy(){
    this.zoki.unsubscribe();
  }

  getSportUrl(sport: string){
    
    
    this.oddsApiService.getBySport(sport).subscribe(d=> this.oddsSports = d);
  };

  getSportNavbar(){
    this.testServiceService.getTest().subscribe(d=> this.navbarSports = d);
  }
}
