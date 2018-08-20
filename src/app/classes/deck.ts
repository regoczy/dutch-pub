import { Card, Suit } from "./card";

export class Deck {

    constructor(
        private cards: Array<Card>
    ) {

    }

    getCards(): Array<Card> {
        return this.cards;
    }

    getSuit(suit: Suit): Array<Card> {
        return this.cards.filter(card => card.suit == suit);
    }
}