import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-cal',
  templateUrl: './action-cal.component.html',
  styleUrls: ['./action-cal.component.css']
})
export class ActionCalComponent {
  @Input() parameter1: number;
  @Input() parameter2: number;
  @Output() calculate: EventEmitter<number> = new EventEmitter();
  onCalculate(){
    this.calculate.emit(this.parameter1+this.parameter2);
  }
}
