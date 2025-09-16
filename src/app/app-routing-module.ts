import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { ApoliceDeSeguro } from './apolice-de-seguro/apolice-de-seguro';
import { CalculadoraDeIMC } from './calculadora-de-imc/calculadora-de-imc';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'calcular-media', component: CalcularMedia},
  {path: 'conversor-de-temperatura', component: ConversorDeTemperatura},
  {path: 'apolice-de-seguro', component: ApoliceDeSeguro},
  {path: 'calculadora-de-imc', component: CalculadoraDeIMC}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
