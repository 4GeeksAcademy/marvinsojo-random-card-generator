/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function newCard() {
  //write your code here
  let suits = ["♣", "♦", "♥", "♠"];
  let cardDeck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomSuits = suits[Math.floor(Math.random() * suits.length)];
  let randomCardDeck = cardDeck[Math.floor(Math.random() * cardDeck.length)];

  let textSuitHeader = document.getElementById("suit-header");
  textSuitHeader.innerText = randomSuits;

  let textCardBody = document.getElementById("card-body");
  textCardBody.innerText = randomCardDeck;

  let textSuitFooter = document.getElementById("suit-footer");
  textSuitFooter.innerText = randomSuits;

  if (randomSuits == suits[2] || randomSuits == suits[1]) {
    textSuitHeader.style.color = "red";
    textCardBody.style.color = "red";
    textSuitFooter.style.color = "red";
  } else {
    textSuitHeader.style.color = "black";
    textCardBody.style.color = "black";
    textSuitFooter.style.color = "black";
  }
  let btnNewCard = document.getElementById("btn");
  btnNewCard.addEventListener("click", newCard);
};
