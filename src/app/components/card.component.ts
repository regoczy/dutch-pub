import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card'
import { CardService } from '../services/card.service';

@Component({
  selector: 'card',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-evenly stretch"
      class="card" [style.color]="color">
      <div fxFlex fxLayoutAlign="center center">
        {{ rankSymbol }}
      </div>
      <div fxFlex fxLayoutAlign="center center">
        {{ suitSymbol }}
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid black;
      width: 65px;
      height: 100px;
      margin: 10px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 5px;
      font-size: 27px;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  `]
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  rankSymbol;
  suitSymbol;
  color;

  constructor(private cardSer: CardService) {

  }

  ngOnInit() {
    this.rankSymbol = this.cardSer.getRankSymbol(this.card.rank);
    this.suitSymbol = this.cardSer.getSuitSymbol(this.card.suit);
    this.color = this.cardSer.getColor(this.card.suit);
  }




}