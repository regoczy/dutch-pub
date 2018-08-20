import { Component } from '@angular/core';
import { Deck } from './classes/deck';
import { DeckFactoryService } from './services/factories/deck-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  deck: Deck;

  constructor(
    private deckFact: DeckFactoryService
  ) {
    this.deck = deckFact.getNew();
  }


}
