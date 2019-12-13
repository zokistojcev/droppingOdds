import { Component, OnInit, Input } from '@angular/core';
import { OverlayModule, OverlayRef, Overlay } from '@angular/cdk/overlay';
import { OddsApiService } from '../services/odds-api.service';
import { CoefficientsFootball } from '../models/coefficientFootball.model';
import { CoefficientsTennis } from '../models/coefficientsTennis.model';

@Component({
  selector: 'app-all-odds',
  templateUrl: './all-odds.component.html',
  styleUrls: ['./all-odds.component.css']
})
export class AllOddsComponent implements OnInit {

  

  text: string = '';
  cFootball: CoefficientsFootball[];
  cTennis: CoefficientsTennis[];

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay, 
    private oddsApiService: OddsApiService) {};

  ngOnInit() {
    this.getTennisOddById()
    this.getFootballOddById();
    // console.log(yu);
    console.log(this.cFootball);
    this.overlayRef = this.overlay.create({});
  }

  getFootballOddById(){
    // console.log(this.oddsApiService.getOddById(this.text));
    return this.oddsApiService.getOddById(this.text).subscribe(data=>this.cFootball=data);
  }
  getTennisOddById(){
    // console.log(this.oddsApiService.getOddById(this.text));
    return this.oddsApiService.getOddByIdTennis(this.text).subscribe(data=>this.cTennis=data);
  }

  // template: `{{ cFootball.coefficientHost }}`,

}
