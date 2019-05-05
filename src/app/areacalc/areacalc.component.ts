import { Component, OnInit } from '@angular/core';
import { DateServices } from '../services/date.services';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './areacalc.component.html',
  styleUrls: ['./areacalc.component.css']
})
export class AreaCalculatorComponent implements OnInit {
  date : string = '';
  constructor(private dateServices : DateServices) { }

  ngOnInit() {
    this.date = this.dateServices.getTodaysDate();
  }

}
