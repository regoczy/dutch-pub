import { Injectable } from '@angular/core';
import { Suit, Rank, Card, suits, ranks } from '../classes/card';

@Injectable()
export class CardService {

    constructor() {
    }

    /*
        Number Ranks are: 2, 3, 4, 5, 6, 7, 8, 9, 10
    */
    getNumberRanks(): Array<Rank> {
        return ranks.slice(0, 9);
    }

    getSuitSymbol(suit: Suit): string {
        switch(suit) {
            case Suit.Clubs:
            return '♣';
            case Suit.Diamonds:
            return '♦';
            case Suit.Hearts:
            return '♥';
            case Suit.Spades:
            return '♠';
        }
    }

    /*
        For Number Ranks the value of the enum is used.
        For Faces and Ace the frist character of the name.
    */
    getRankSymbol(rank: Rank): string {
        if (this.getNumberRanks().includes(rank)) {
            return rank.toString();
        } else {
            return Rank[rank][0];
        }
    }

    getColor(suit: Suit): string {
        switch(suit) {
            case Suit.Clubs:
            case Suit.Spades:
            return 'black';
            case Suit.Diamonds:
            case Suit.Hearts:
            return 'red';
        }
    }
    
}