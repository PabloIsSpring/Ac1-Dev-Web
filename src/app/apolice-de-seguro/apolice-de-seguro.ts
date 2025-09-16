import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-de-seguro',
  standalone: false,
  templateUrl: './apolice-de-seguro.html',
  styleUrl: './apolice-de-seguro.css'
})
export class ApoliceDeSeguro {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorSeguro: number = 0;

  calculoDeSeguro(): void {
    if(this.sexo == 'Masculino') {
      if (this.idade > 25 ) {
        this.valorSeguro = this.valorAutomovel * 0.1
      } else {
        this.valorSeguro = this.valorAutomovel * 0.15
      }
    } else {
      this.valorSeguro = this.valorAutomovel * 0.08
    }
  }
}
