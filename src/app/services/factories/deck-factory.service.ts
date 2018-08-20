import { Injectable } from '@angular/core';
import { Suit, Rank, Card, suits, ranks } from '../../classes/card';
import { Deck } from '../../classes/deck';

@Injectable()
export class DeckFactoryService {

    constructor() {
    }

    public getNew(): Deck {
        let cards = new Array<Card>();
        for (let suit of suits) {
            for (let rank of ranks) {
                cards.push(new Card(suit, rank));
            }
        }
        return new Deck(cards);
    }
}