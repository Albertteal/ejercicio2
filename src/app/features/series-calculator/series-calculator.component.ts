import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-series-calculator',
  templateUrl: './series-calculator.component.html',
  styleUrls: ['./series-calculator.component.css']
})
export class SeriesCalculatorComponent {
  @Input() n: number | null = null; // Recibe el valor de "n" desde InputFormComponent
  @Output() resultCalculated = new EventEmitter<number>(); // Emite el resultado calculado
  result: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['n'] && this.n !== null) {
      const result = this.calculateSeries(this.n);
      this.resultCalculated.emit(result); // Emite el resultado calculado
    }
  }

  private calculateSeries(n: number): number {
    // Ejemplo: cálculo de la serie de Fibonacci
    if (n <= 1) {
      return n;
    }
    let a = 0, b = 1, temp = 0;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}




