// Building a program that tells a user that how many times a specific button gets clicked

let leftButton = document.getElementById("first-button");
let centerButton = document.getElementById("second-button");
let rightButton = document.getElementById("third-button");
let buttons = document.querySelectorAll(".btn");

const clickValue = () => {
  for (const button of buttons) {
    button.onclick = () => {
      button.innerText++;
    };
  }
};

const restart = () => {
  leftButton.innerText = "0";
  centerButton.innerText = "0";
  rightButton.innerText = "0";
};
