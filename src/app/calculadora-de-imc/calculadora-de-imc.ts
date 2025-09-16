import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-de-imc',
  standalone: false,
  templateUrl: './calculadora-de-imc.html',
  styleUrl: './calculadora-de-imc.css'
})
export class CalculadoraDeIMC {
  peso: number = 0;
  altura: number = 0;

  resultado: number = 0;

  resultadoTexto: string = ''

  calculandoIMC(): void {
    this.resultado = this.peso / this.altura;
    this.resultado = this.resultado * 100;

    if(this.resultado < 18.5){
      this.resultadoTexto = "Abaixo de 18.5: Abaixo do peso"
    } else if (this.resultado >= 18.5 && this.resultado <= 24.9 ) {
      this.resultadoTexto = "Entre 18.5 e 24.9: Peso normal"
    } else if (this.resultado >= 25 && this.resultado <= 29.9){
      this.resultadoTexto = "Entre 25 e 29.9: Sobrepeso"
    } else if (this.resultado >= 30 && this.resultado <= 34.9) {
      this.resultadoTexto = "Entre 30 e 34.9: Obesidade grau I"
    } else if (this.resultado >= 35 && this.resultado <= 39.9) {
      this.resultadoTexto = "Entre 35 e 39.9: Obesidade grau II"
    } else if (this.resultado > 40) {
      this.resultadoTexto = "Acima de 40: Obesidade grau III"
    }
  }
}
