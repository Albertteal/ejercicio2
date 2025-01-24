import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCalculatorComponent } from './series-calculator.component';

describe('SeriesCalculatorComponent', () => {
  let component: SeriesCalculatorComponent;
  let fixture: ComponentFixture<SeriesCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesCalculatorComponent]
    });
    fixture = TestBed.createComponent(SeriesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
