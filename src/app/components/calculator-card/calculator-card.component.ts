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

  constructor() { }

  ngOnInit(): void {
  }

  isError(control: FormControl) {
    return (control.invalid && control.touched);
  }

}
