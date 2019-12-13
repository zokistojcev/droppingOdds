import { Component, Input, OnInit } from '@angular/core';
import { DroppingOdd } from 'src/app/models/droppingOdd.model';
import { fromStringWithSourceMap } from 'source-list-map';
import { OddsApiService } from 'src/app/services/odds-api.service';
import { CoefficientsFootball } from 'src/app/models/coefficientFootball.model';
import { CoefficientsTennis } from 'src/app/models/coefficientsTennis.model';


@Component({
  selector: 'app-show-all-odds',
  templateUrl: './show-all-odds.component.html',
  styleUrls: ['./show-all-odds.component.css']
})
export class ShowAllOddsComponent  {
  @Input() droppingOdds: DroppingOdd[];
  @Input() cFootball: CoefficientsFootball[]; 
  @Input() cTennis: CoefficientsTennis[]; 
}
