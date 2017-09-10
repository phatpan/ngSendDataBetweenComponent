import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
  num1: number=0;
  num2: number=0;
  resultValue: number = 0;
  result(value){
    this.resultValue = value;
  }
}
