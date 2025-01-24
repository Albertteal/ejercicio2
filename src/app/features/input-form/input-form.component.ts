import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  @Output() calculateSeries  = new EventEmitter<number>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      n: ['', [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const n = this.form.value.n;
      this.calculateSeries.emit(n);
    }
  }

}
