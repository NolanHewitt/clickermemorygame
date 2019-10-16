import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

//---------------------------------------------------------------------------------------------
<Button1
      onClick={() => {
        if (clicked9 === false && clicked8 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked9 = true;
        }
        else if (clicked9 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked9 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 225,
        height: 183,
        resizeMode: 'contain'
        }} alt="uranus" src="https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

        <Button1
      onClick={() => {
        if (clicked4 === false && clicked3 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked4 = true;
        }
        else if (clicked4 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked4 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 183,
        height: 183,
        resizeMode: 'contain'
        }} alt="Earth" src="https://www.universetoday.com/wp-content/uploads/2010/05/Earth-Western-Hemisphere.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------       

        <Button1
      onClick={() => {
        if (clicked3 === false && clicked2 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked3 = true;
        }
        else if (clicked3 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked3 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 213,
        height: 183,
        resizeMode: 'contain'
        }} alt="venus" src="https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF-320-80.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

        <Button1
      onClick={() => {
        if (clicked2 === false && clicked1 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked2 = true;
        }
        else if (clicked2 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked2 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 183,
        height: 183,
        resizeMode: 'contain'
        }} alt="mercury" src="https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------        

        <Button1
      onClick={() => {
        if (clicked6 === false && clicked5 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked6 = true;
        }
        else if (clicked6 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked6 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 183,
        height: 183,
        resizeMode: 'contain'
        }} alt="ceres" src="http://cdn.sci-news.com/images/2015/12/image_3503_1-Ceres-Bright-Spots.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

    <Button1 onClick={() => {
      if (clicked1 === false && lost === false && score <= 10) {
        score++;
        document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
        document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
        clicked1 = true;
      }
      else if (clicked1 === false && lost === false && score === 11) {
        document.getElementById("win").style.display = "block";
        document.getElementById("scoretable").style.display = "none";
        won = true;
        clicked1 = true;
      }
      else if (won === false) {
        console.log("You Lose")
        document.getElementById("scoretable").style.display = "none";
        document.getElementById("lose").style.display = "block";
        lost = true;
      }
    }} >{<img style={{
      flex: 1,
      width: 183,
      height: 183,
      resizeMode: 'contain'
      }} alt="sun" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/628px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

<Button1
      onClick={() => {
        if (clicked10 === false && clicked9 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked10 = true;
        }
        else if (clicked10 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked10 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 263,
        height: 183,
        resizeMode: 'contain'
        }} alt="neptune" src="https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

<Button1
      onClick={() => {
        if (clicked11 === false && clicked10 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked11 = true;
        }
        else if (clicked11 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked11 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >

{<img style={{
  flex: 1,
  width: 183,
  height: 183,
  resizeMode: 'contain'
  }} alt="pluto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg"></img>}

      </Button1>,

//----------------------------------------------------------------------------------------------------

<Button1
onClick={() => {
  if (clicked7 === false && clicked6 === true && lost === false && score <= 10) {
    score++;
    document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
    document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
    clicked7 = true;
  }
  else if (clicked7 === false && lost === false && score === 11) {
    document.getElementById("win").style.display = "block";
    document.getElementById("scoretable").style.display = "none";
    won = true;
    clicked7 = true;
  }
  else if (won === false) {
    console.log("You Lose")
    document.getElementById("scoretable").style.display = "none";
    document.getElementById("lose").style.display = "block";
    lost = true;
  }
}} >{<img style={{
  flex: 1,
  width: 183,
  height: 183,
  resizeMode: 'contain'
  }} alt="jupiter" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg"></img>}</Button1>,

  //---------------------------------------------------------------------------------------------

  <Button1
      onClick={() => {
        if (clicked12 === false && clicked11 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked12 = true;
        }
        else if (clicked12 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked12 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 235,
        height: 183,
        resizeMode: 'contain'
        }} alt="Eris" src="https://solarsystem.nasa.gov/system/resources/list_images/2390_eris_th.jpg"></img>}</Button1>,

//----------------------------------------------------------------------------------------------------

    <Button1
      onClick={() => {
        if (clicked5 === false && clicked4 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked5 = true;
        }
        else if (clicked5 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked5 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 183,
        height: 183,
        resizeMode: 'contain'
        }} alt="Mars" src="https://marsmobile.jpl.nasa.gov/images/mars-globe-valles-marineris-enhanced-br2.jpg"></img>}</Button1>,

//----------------------------------------------------------------------------------------------------

    <Button1
      onClick={() => {
        if (clicked8 === false && clicked7 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked8 = true;
        }
        else if (clicked8 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked8 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 183,
        height: 183,
        resizeMode: 'contain'
        }} alt="saturn" src="https://space-facts.com/wp-content/uploads/saturn.png"></img>}</Button1>,
    
  ];



  //Return Function
  return (
    <>

<div id="instructions" style={{ fontSize: 50, textAlign: "center" }}>{"Click on the objects in our solar system in the correct order."}</div>

<div id="instructions2" style={{ fontSize: 30, textAlign: "center" }}>{"You get 1 point for each correct answer, guess wrong and you lose!"}</div>

      {buttons}

      <br></br>
      <br></br>

      <ButtonExit
        onClick={() => {
          document.location.reload(true)
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