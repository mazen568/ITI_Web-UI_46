import { Board } from "./Board.js";
import { AudioPlayer } from "../audio/AudioPlayer.js";
import { ICard } from "../models/ICard.js";

export class Game {
    flippedCards: ICard[] = [];
    matchedPairs = 0;
    board: Board;
    audio: AudioPlayer;

    constructor( board: Board,  audio: AudioPlayer) {
        this.board = board;
        this.audio = audio;
    }

    flipCard(card: ICard, onUpdate: () => void) {
        if (card.isFlipped  || this.flippedCards.length === 2) 
            return;

        card.isFlipped = true;
        this.flippedCards.push(card);
        this.audio.playFlip();
        this.audio.playStart();
        onUpdate();

        if (this.flippedCards.length === 2) {
            this.checkMatch(onUpdate);
        }
    }

     checkMatch(onUpdate: () => void) {
        const [c1, c2] = this.flippedCards;
        if (c1.value === c2.value) {
            c1.isMatched = c2.isMatched = true;
            this.matchedPairs++;
            this.audio.playMatch();
            this.resetSelection(onUpdate);
            if (this.matchedPairs === 10) 
                this.audio.playGameOver();
        } else {
            this.audio.playNoMatch();
            setTimeout(() => {
                c1.isFlipped = c2.isFlipped = false;
                this.resetSelection(onUpdate);
            }, 1000);
        }
    }

     resetSelection(onUpdate: () => void) {
        this.flippedCards = [];
        onUpdate();
    }
}