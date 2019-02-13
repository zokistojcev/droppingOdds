import { Component, OnInit, Input } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { Odd } from './models/odd.model';
import { CoefficientsTennis } from './models/coefficientsTennis.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    this.getOdds();
  }
  title = 'Marathon';
  odds: Odd[];
  
  
  constructor(private testService: TestServiceService) {   }
  getOdds(){
   
    this.testService.getOdds().subscribe((data: Odd[]) => this.odds = data);
  }
}
