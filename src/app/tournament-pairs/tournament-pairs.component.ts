import { Component, OnInit, Input } from '@angular/core';
import { OddsApiService } from '../services/odds-api.service';
import { ActivatedRoute } from '@angular/router';
import { Odd } from '../models/odd.model';

@Component({
  selector: 'app-tournament-pairs',
  templateUrl: './tournament-pairs.component.html',
  styleUrls: ['./tournament-pairs.component.css']
})
export class TournamentPairsComponent implements OnInit {

  constructor(private oddsApiService: OddsApiService, private route: ActivatedRoute) { }
  tourPairs: Odd[];
  sportParam: string;
  tourParam: string;

  ngOnInit() {
    this.route.params.subscribe((s) => 
      this.oddsApiService.getTournamentSingle(s["tournament"]).subscribe(v=>{
        this.tourPairs = v;
    }))
  }
}
