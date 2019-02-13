import { Component, OnInit, Input } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Odd } from '../models/odd.model';

@Component({
  selector: 'app-dropping-row',
  templateUrl: './dropping-row.component.html',
  styleUrls: ['./dropping-row.component.css']
})
export class DroppingRowComponent {
  title = 'Marathon';
  @Input() odds: Odd[];
  
}
