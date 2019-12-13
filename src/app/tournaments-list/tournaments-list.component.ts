import { Component, OnInit, Input } from '@angular/core';
import { OddsApiService } from '../services/odds-api.service';
import { Odd } from '../models/odd.model';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {

  @Input() tournamentSport: string;
  allTournaments: string[];
  tourPairs: Odd[];
  isEmpty: boolean = false;

 
  constructor(private oddsApiService: OddsApiService) { }

  ngOnInit() {
    
    console.log(this.tournamentSport);
  }

  getTournamentsBySport(sport: string){
    this.isEmpty = !this.isEmpty;
    if(this.isEmpty){this.oddsApiService.getTournamentsBySport(sport).subscribe(x=>this.allTournaments = x)}
    else this.allTournaments=[];
  }
}
