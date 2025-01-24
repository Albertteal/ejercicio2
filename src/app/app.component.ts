import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n: number | null = null;

  onCalculateSeries(value: number): void {
    this.n = value; // Actualiza el valor de "n" cuando se recibe del InputFormComponent
  }
}
