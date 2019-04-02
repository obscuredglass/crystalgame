//select a random number between 19-120 to start off the game

$(document).ready(function() {
  var Random=Math.floor(Math.random()*101+19)
  $(`#randomNumber`).text(Random);

  // variables for the numbers for each crystal

  var num1=Math.floor(Math.random()*11+1)
  var num2=Math.floor(Math.random()*11+1)
  var num3=Math.floor(Math.random()*11+1)
  var num4=Math.floor(Math.random()*11+1)

  // all the variables for the score tally
  
  $(`#number-wins`).text(wins);
  $(`#number-losses`).text(losses);

  // reset the score

  function reset(){
    Random=Math.floor(Math.random()*101+19);
    $(`#random-number`).text(Random);
    var num1=Math.floor(Math.random()*11+1)
    var num2=Math.floor(Math.random()*11+1)
    var num3=Math.floor(Math.random()*11+1)
    var num4=Math.floor(Math.random()*11+1)
    userTotal=0;
    // possibly set to ""
    $(`#endTotal`).text(gamerTotal);

  }

  // adds to the user's wins

  function awesome(){
    alert("You won! You're good at guessing, I guess!");
    wins++;
    $(`#number-wins`).text(wins);
    reset();
  }

  // adds to the user's losses

  function badTime(){
    alert("Don't play Blackjack, you're bad at guessing!")
    losses++;
    $(`number-losses`).text(losses);
    reset()

  }

  // run the jewels click the jewels
  $(`#firstJewel`).on('click', function(){
    gamerTotal = gamerTotal + num1;
    $(`#endTotal`).text(gamerTotal);
      if (gamerTotal == Random){
        awesome();
      }
      else if (gamerTotal > Random){
        badTime();
      }
  })
  $(`#secondJewel`).on('click', function(){
    gamerTotal = gamerTotal + num2;
    $(`#endTotal`).text(gamerTotal);
      if (gamerTotal == Random){
        awesome();
      }
      else if (gamerTotal > Random){
        badTime();
      }
  })
  $(`#thirdJewel`).on('click', function(){
    gamerTotal = gamerTotal + num3;
    $(`#endTotal`).text(gamerTotal);
      if (gamerTotal == Random){
        awesome();
      }
      else if (gamerTotal > Random){
        badTime();
      }
  })
  $(`#fourthJewel`).on('click', function(){
    gamerTotal = gamerTotal + num4;
    $(`#endTotal`).text(gamerTotal);
      if (gamerTotal == Random){
        awesome();
      }
      else if (gamerTotal > Random){
        badTime();
      }
  })






















})