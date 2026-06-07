import { Game } from "./core/Game.js";
import { Board } from "./core/Board.js";
import { AudioPlayer } from "./audio/AudioPlayer.js";

const images = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/9.jpg",
    "assets/images/10.jpg",
];
const board = new Board(images);
const audio = new AudioPlayer();
const game = new Game(board, audio);
const grid = document.getElementById("game-grid")!;

function render() {
    grid.innerHTML = "";
    game.board.cards.forEach(card => {
        const img = document.createElement("img");
        img.className = "card";
        

        img.src = (card.isFlipped || card.isMatched) ? card.value : "assets/images/back.jpg";
        
        img.onclick = () => game.flipCard(card, render);
        grid.appendChild(img);
    });

    const score = document.getElementById("score")!;
    const progress = (game.matchedPairs / 10) * 100;
    score.textContent = `${progress}%`;
    document.getElementById("progress-bar")!.style.width = `${progress}%`;
}

render();
