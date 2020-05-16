import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  ready: boolean = false;

  currencyForm: FormGroup = this.formBuilder.group({
    baseCurrency: ['', [Validators.required, Validators.minLength(3)]],
    exchangeCurrency: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.ready = true;
  }

  get baseCurrency(): AbstractControl {
    return this.currencyForm.controls.baseCurrency;
  }

  get exchangeCurrency(): AbstractControl {
    return this.currencyForm.controls.exchangeCurrency;
  }
}
