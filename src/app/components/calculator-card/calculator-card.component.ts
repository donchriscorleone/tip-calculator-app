import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'calculator-card',
  templateUrl: './calculator-card.component.html',
  styleUrls: ['./calculator-card.component.scss']
})
export class CalculatorCardComponent implements OnInit {
  bill: FormControl = new FormControl(null, [Validators.required, Validators.min(1)])
  numberOfPeople = new FormControl(null, [Validators.required, Validators.min(1)])
  custom = new FormControl("Custom", [Validators.required, Validators.min(1)])
  tip = 0;
  tipAmount = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  isError(control: FormControl) {
    return (control.invalid && control.touched);
  }

  changeTip(value: number) {
    this.tip = value;
    this.calculateTip();
  }

  calculateTip() {
    this.tipAmount = parseFloat(((this.bill.value * this.tip) / this.numberOfPeople.value ).toFixed(2));
    
    this.total = parseFloat((this.tipAmount * this.numberOfPeople.value).toFixed(2));
  }

  reset() {
    this.bill.reset();
    this.numberOfPeople.reset();
    this.custom.reset();
    this.custom.setValue('Custom')
    this.tip = 0;
    this.tipAmount = 0;
    this.total = 0;
  }
}
