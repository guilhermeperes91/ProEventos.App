import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    PalestrantesComponent
  ],
  imports: [ //TESTE GIT, SEGUNDA ALTERACAO NO FRONT
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //modulo do http client, permite eusar o modulo.
    BrowserAnimationsModule //modulo do animations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
