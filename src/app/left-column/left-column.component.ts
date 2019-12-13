import { Component, OnInit, Input } from '@angular/core';
import { OddsApiService } from '../services/odds-api.service';
import { Odd } from '../models/odd.model';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent implements OnInit {

  
  allSports: string[];
  allTournamentsBySport: string[];
  oddsByTournament: Odd[];
  currentJustify = 'center';
  constructor(private oddsApiService: OddsApiService){};
  
  ngOnInit() {
    this.getAllSports();

  }

  private getAllSports(){
    this.oddsApiService.getSports().subscribe(d=> this.allSports = d);
  }


  getAllTournaments(sport: string){
    console.log(sport);
    this.oddsApiService.getTournamentsBySport(sport).subscribe(d=> this.allTournamentsBySport = d);
    console.log(this.allTournamentsBySport);

  }

  
}
