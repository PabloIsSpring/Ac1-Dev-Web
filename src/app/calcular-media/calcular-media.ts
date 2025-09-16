import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
  ac1: number = 0;
  ac2: number = 0;
  af: number = 0;
  ag: number = 0;

  mediaFinal: number = 0;

  aprovad: string = '';

  calculadoraMedia(): void {
    this.mediaFinal = 0;

    this.mediaFinal += this.ac1 * 0.15;
    this.mediaFinal += this.ac2 * 0.3;
    this.mediaFinal += this.af * 0.45;
    this.mediaFinal += this.ag * 0.1;

    
    if(this.mediaFinal >= 5){
      this.aprovad = 'Aprovado com media ' + this.mediaFinal
    } else {
      this.aprovad = 'reprovado com media ' + this.mediaFinal
    }
  }
}

