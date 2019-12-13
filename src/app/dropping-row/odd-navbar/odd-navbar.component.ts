import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { OddsApiService } from 'src/app/services/odds-api.service';

@Component({
  selector: 'app-odd-navbar',
  templateUrl: './odd-navbar.component.html',
  styleUrls: ['./odd-navbar.component.css']
})
export class OddNavbarComponent implements OnInit {
  @Input() sport: string;
 tournaments: string[];
  constructor(private oddService: OddsApiService) { }

  ngOnInit() {
    this.oddService.getTournamentsBySport(this.sport).subscribe(g=>this.tournaments=g);
  }
  // ngOnChanges(x: SimpleChange){
  //   this.oddService.getTournamentsBySport(this.sport).subscribe(g=>this.tournaments=g);
  //   console.log(x.firstChange)
  // }

}
