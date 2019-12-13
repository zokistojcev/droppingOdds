import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { OddsApiService } from '../services/odds-api.service';
import { DroppingOdd } from '../models/droppingOdd.model';
import { MinutesOfBeginningTimeAndLastChange } from '../models/minutesOfBeginningTimeAndLastChange.model';

@Component({
  selector: 'app-ngbd-dropdown-basic',
  templateUrl: './ngbd-dropdown-basic.component.html',
  styleUrls: ['./ngbd-dropdown-basic.component.css']
})
export class NgbdDropdownBasicComponent {

  constructor() { }
  minutesOfLastChange: number = 1440;
  minutesOfBeginningTime: number = 2880;
  @Output() minutesOfLastChangeAndBeginningTime : EventEmitter<MinutesOfBeginningTimeAndLastChange> = new EventEmitter();
 
  allDroppingOddsByHours(event){
    this.minutesOfLastChange = event.target.value;
    var min = new MinutesOfBeginningTimeAndLastChange();
    min.minutesOfBeginningTime = this.minutesOfBeginningTime;
    min.minutesOfLastChange = this.minutesOfLastChange;
    this.minutesOfLastChangeAndBeginningTime.emit(min);
  }
  
  droppingOddsByNextHours(event){
    this.minutesOfBeginningTime = event.target.value;
    var min = new MinutesOfBeginningTimeAndLastChange();
    min.minutesOfBeginningTime = this.minutesOfBeginningTime;
    min.minutesOfLastChange = this.minutesOfLastChange;
    this.minutesOfLastChangeAndBeginningTime.emit(min);
  }

  

}
