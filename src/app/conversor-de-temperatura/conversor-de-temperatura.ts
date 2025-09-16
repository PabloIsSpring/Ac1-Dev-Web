import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-de-temperatura',
  standalone: false,
  templateUrl: './conversor-de-temperatura.html',
  styleUrl: './conversor-de-temperatura.css'
})
export class ConversorDeTemperatura {
  fahrenheit: number = 0;
  kelvin: number = 0;
  celsius: number = 0;

  calculoDeTemperatura(): void {
      this.fahrenheit = (this.celsius * 1.8) + 32;
      this.kelvin = this.celsius + 273.15;
  }
}
