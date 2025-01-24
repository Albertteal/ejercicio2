import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-series-calculator',
  templateUrl: './series-calculator.component.html',
  styleUrls: ['./series-calculator.component.css']
})
export class SeriesCalculatorComponent {
  @Input() n: number | null = null; // Recibe el valor de "n" desde InputFormComponent
  result: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['n'] && this.n !== null) {
      this.calculateSeries(this.n);
    }
  }

  calculateSeries(n: number): void {
    this.result = 0;
    for (let i = 1; i <= n; i++) {
      this.result += i;
    }
  }



}
