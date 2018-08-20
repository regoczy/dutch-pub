import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { CardDisplayComponent } from './components/card-display.component';
import { DeckFactoryService } from './services/factories/deck-factory.service';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ DeckFactoryService, CardService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
