import React from "react";
import ReactDOM from "react-dom";

import Button1 from "./components/Button1";
import ButtonExit from "./components/ButtonExit";

function App() {
  let score = 0;
  let lost = false;
  let won = false;
  let clicked1 = false;
  let clicked2 = false;
  let clicked3 = false;
  let clicked4 = false;
  let clicked5 = false;
  let clicked6 = false;
  let clicked7 = false;
  let clicked8 = false;
  let clicked9 = false;
  let clicked10 = false;
  let clicked11 = false;
  let clicked12 = false;

  const buttons = [
    <Button1 onClick={() => {
      if (clicked1 === false && lost === false && score <= 10) {
        score++;
        document.getElementById("scoretable").innerHTML = score;
        document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
        clicked1 = true;
      }
      else if (clicked1 === false && lost === false && score === 11) {
        document.getElementById("win").style.display = "block";
        document.getElementById("scoretable").style.display = "none";
        won = true;
        clicked1 = true;
      }
      else if (clicked1 === true && won === false) {
        console.log("You Lose")
        document.getElementById("scoretable").style.display = "none";
        document.getElementById("lose").style.display = "block";
        lost = true;
      }
    }} >Number1</Button1>,
    <Button1
      onClick={() => {
        if (clicked2 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked2 = true;
        }
        else if (clicked2 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked2 = true;
        }
        else if (clicked2 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number2</Button1>,
    <Button1
      onClick={() => {
        if (clicked3 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked3 = true;
        }
        else if (clicked3 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked3 = true;
        }
        else if (clicked3 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number3</Button1>,
    <Button1
      onClick={() => {
        if (clicked4 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked4 = true;
        }
        else if (clicked4 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked4 = true;
        }
        else if (clicked4 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number3</Button1>,
    <Button1
      onClick={() => {
        if (clicked5 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked5 = true;
        }
        else if (clicked5 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked5 = true;
        }
        else if (clicked5 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number5</Button1>,
    <Button1
      onClick={() => {
        if (clicked6 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked6 = true;
        }
        else if (clicked6 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked6 = true;
        }
        else if (clicked6 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number6</Button1>,
    <Button1
      onClick={() => {
        if (clicked7 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked7 = true;
        }
        else if (clicked7 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked7 = true;
        }
        else if (clicked7 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number7</Button1>,
    <Button1
      onClick={() => {
        if (clicked8 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked8 = true;
        }
        else if (clicked8 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked8 = true;
        }
        else if (clicked8 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number8</Button1>,
    <Button1
      onClick={() => {
        if (clicked9 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked9 = true;
        }
        else if (clicked9 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked9 = true;
        }
        else if (clicked9 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number9</Button1>,
    <Button1
      onClick={() => {
        if (clicked10 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked10 = true;
        }
        else if (clicked10 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked10 = true;
        }
        else if (clicked10 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number10</Button1>,
    <Button1
      onClick={() => {
        if (clicked11 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked11 = true;
        }
        else if (clicked11 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked11 = true;
        }
        else if (clicked11 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number11</Button1>,
    <Button1
      onClick={() => {
        if (clicked12 === false && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = score;
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked12 = true;
        }
        else if (clicked12 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked12 = true;
        }
        else if (clicked12 === true && won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >Number12</Button1>,
  ];

  function shuffleArray(buttons) {
    for (let i = buttons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }
    return buttons;
  }


  //Return Function
  return (
    <>
      {buttons};

      <ButtonExit
        onClick={() => {
          document.location.reload(true)
        }}>
      </ButtonExit>


      <ButtonExit
        onClick={() => {
          shuffleArray(buttons);
          
        }}>
      </ButtonExit>





      <div id="scoretable" style={{ fontSize: 75 }}>{"Score: (" + score + ")"}</div>
      <div id="lose" style={{ fontSize: 75, display: "none" }}>{"You lose, your score was " + score + "."}</div>
      <div id="win" style={{ fontSize: 75, display: "none" }}>{"You win!"}</div>
    </>
  );



  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);