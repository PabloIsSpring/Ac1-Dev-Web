import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceDeSeguro } from './apolice-de-seguro/apolice-de-seguro';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { CalculadoraDeIMC } from './calculadora-de-imc/calculadora-de-imc';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    CalcularMedia,
    ApoliceDeSeguro,
    ConversorDeTemperatura,
    CalculadoraDeIMC
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
