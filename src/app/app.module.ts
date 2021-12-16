import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
//import { HoHoraFlorestaComponent } from './ho-hora-floresta/ho-hora-floresta.component';
import { HoraFlorestaComponent } from './hora-floresta/hora-floresta.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    //HoHoraFlorestaComponent,
    HoraFlorestaComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    EventosComponent,
    InicioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
