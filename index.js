"use strict";

const coinImage = document.querySelector(".coin");
const resultText = document.querySelector(".result");
const btnFlipCoin = document.querySelector(".btn-flip-coin");

function flipCoinResult() {
    const isHeads = Math.random() < 0.5;
    const imageSrc = isHeads ? "./resources/heads.svg" : "./resources/tails.svg";
    const outcomeText = isHeads ? "Heads" : "Tails";
    coinImage.src = imageSrc;
    resultText.textContent = outcomeText;
}

btnFlipCoin.addEventListener("click", flipCoinResult);