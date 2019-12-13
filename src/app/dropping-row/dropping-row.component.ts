import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Odd } from '../models/odd.model';
import { OddsApiService } from '../services/odds-api.service';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DroppingOdd } from '../models/droppingOdd.model';
import { MinutesOfBeginningTimeAndLastChange } from '../models/minutesOfBeginningTimeAndLastChange.model';

@Component({
  selector: 'app-dropping-row',
  templateUrl: './dropping-row.component.html',
  styleUrls: ['./dropping-row.component.css']
})
export class DroppingRowComponent implements OnInit, OnChanges{
  ngOnChanges(){
    // this.filteredDroppingOdds(this.droppingOdds);
    
  }
  odds: Odd[];
  droppingOdds: DroppingOdd[];
  sport: string;
  tournament: string;
  minutesOfLastChange: number = 1440;
  minutesOfBeginningTime: number = 2880;

  constructor(
  private oddsApiService: OddsApiService,
  private route: ActivatedRoute)
  {}
  ngOnInit(){
    // 
    
    this.route.params.subscribe((s) => 
    {
      this.sport = s['sport'];
      this.tournament = s['tournament'];
      if(this.tournament){
        this.oddsApiService.getTournament(this.sport, this.tournament).subscribe(v=>{
          this.odds = v;
        })
      }
      else{
        this.oddsApiService.getDroppingOddsByHoursAndSport(this.sport, this.minutesOfLastChange, this.minutesOfBeginningTime).subscribe(v=>{
          this.droppingOdds = v;
          // this.drop();
        })
      }
    })
    // this.drop();
  }
 
  hasTournament(): boolean{
    if(this.tournament){
      return true
    }
    return false
  }

  filteredDroppingOdds(minutesOfBeginningTimeAndLastChange: MinutesOfBeginningTimeAndLastChange){
   
    this.minutesOfLastChange = minutesOfBeginningTimeAndLastChange.minutesOfLastChange;
    this.minutesOfBeginningTime = minutesOfBeginningTimeAndLastChange.minutesOfBeginningTime;
    this.oddsApiService.getDroppingOddsByHoursAndSport(this.sport, this.minutesOfLastChange, this.minutesOfBeginningTime).subscribe(v=>{
      this.droppingOdds = v;})
   
    
  }

 

 
  
}
