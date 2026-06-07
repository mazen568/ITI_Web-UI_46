import { ICard } from '../models/ICard';

export class Board {
    cards: ICard[] = [];

    
    constructor(cardValues: string[]) {
        this.createBoard(cardValues);
        this.shuffle();
    }
   
    createBoard(cardValues: string[]) {
        cardValues.forEach(value => {
            // We need pairs, so we push two of each value
            this.cards.push(this.createCard(value));
            this.cards.push(this.createCard(value));
        });

    }

    createCard(value: string): ICard {
        return {
            id: crypto.randomUUID(),
            value: value,
            isFlipped: false,
            isMatched: false
        };
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    
}
