/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Creating the array to pick card symbols
  console.log("You see this message every time you refresh page");
  const suites = ["♠", "♣", "♦", "♥"];

  //Function to pick a random position of symbols
  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  //Identifying the symbol from the ramdom position get it from the last function
  let suite = suites[randomCard(suites)];

  //Testing the random
  // console.log("This is the random Number ", randomCard(suites));
  console.log(suite);

  //Searching the simbols to be replaced and print them on the page
  let uppfig = document.querySelector("#uppfig");
  uppfig.innerHTML = suite;
  let downfig = document.querySelector("#downfig");
  downfig.innerHTML = suite;

  ////Creating the array to pick card number
  const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  //Identifying the symbol from the ramdom position get it from the last function
  let numbers = number[randomCard(number)];

  //Searching the simbols to be replaced and print them on the page
  let letter = document.querySelector("#letter");
  letter.innerHTML = numbers;

  if (suite == "♥" || suite == "♦") {
    downfig.style.color = "red";
    uppfig.style.color = "red";
  }
};
