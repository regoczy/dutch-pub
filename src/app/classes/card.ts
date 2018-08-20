export class Card {
    
    constructor(
        public suit: Suit,
        public rank: Rank) {
    }

}

export enum Suit {

    Clubs, Diamonds, Hearts, Spades

}

export enum Rank {

    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
    Ace = 14

}

export var suits: Array<Suit> = [ Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades ];

export var ranks: Array<Rank> = [
    Rank.Two,
    Rank.Three,
    Rank.Four,
    Rank.Five ,
    Rank.Six ,
    Rank.Seven,
    Rank.Eight,
    Rank.Nine,
    Rank.Ten,
    Rank.Jack,
    Rank.Queen,
    Rank.King,
    Rank.Ace ];