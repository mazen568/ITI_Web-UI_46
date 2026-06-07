export class AudioPlayer {
    startGame:HTMLAudioElement;
    flipSound: HTMLAudioElement;
    matchSound: HTMLAudioElement;
    noMatchSound: HTMLAudioElement;
    gameOverSound: HTMLAudioElement;

    constructor() {
        this.startGame=new Audio('assets/audio/fulltrack.mp3'); 
        this.flipSound = new Audio('assets/audio/flip.mp3');
        this.matchSound = new Audio('assets/audio/good.mp3');
        this.noMatchSound = new Audio('assets/audio/fail.mp3');
        this.gameOverSound = new Audio('assets/audio/game-over.mp3');
    }

    playStart(){
        this.startGame.play();
    }

    playFlip() {
        this.flipSound.currentTime = 0; 
        this.flipSound.play();
    }

    playMatch() {
        this.matchSound.currentTime = 0;
        this.matchSound.play();
    }

    playNoMatch() {
        this.noMatchSound.currentTime = 0;
        this.noMatchSound.play();
    }

    playGameOver() {
        this.gameOverSound.currentTime = 0;
        this.startGame.pause();
        this.gameOverSound.play();
    }
}
