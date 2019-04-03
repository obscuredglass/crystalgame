  // This selecs the randomized number that's between 19-120 to start off the game

  $( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    $('#randomNum').text(Random);
    // Appending random number to the randomNum id in the HTML doc
   
  
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // This sets up the random numbers for each jewel and the random number has to be between 1-12

    var gamerTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  This sets the variables for the tally

  $('#numberWinning').text(wins);
  $('#numberLosses').text(losses);
  // Resetting the game***
  
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNum').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        gamerTotal= 0;
        $('#finalTotal').text(gamerTotal);
        } 
  // add the wins to the gamerTotal

  function awesome(){
  alert("I guess you're good at guessing!");
    wins++; 
    $('#numberWinning').text(wins);
    reset();
  }
  // add the losses to the gamerTotal

  function badGuess(){
  alert ("I wouldn't play Blackjack if I were you!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  // sets up click for all the jewels
    $('#crystOne').on ('click', function(){
      gamerTotal = gamerTotal + num1;
      console.log("New gamerTotal= " + gamerTotal);
      $('#finalTotal').text(gamerTotal); 
            //sets win/lose conditions
          if (gamerTotal == Random){
            awesome();
          }
          else if (gamerTotal > Random){
            badGuess();
          }   
    })  
    $('#crystTwo').on ('click', function(){
      gamerTotal = gamerTotal + num2;
      console.log("New gamerTotal= " + gamerTotal);
      $('#finalTotal').text(gamerTotal); 
          if (gamerTotal == Random){
            awesome();
          }
          else if (gamerTotal > Random){
            badGuess();
          } 
    })  
    $('#crystThree').on ('click', function(){
      gamerTotal = gamerTotal + num3;
      console.log("New gamerTotal= " + gamerTotal);
      $('#finalTotal').text(gamerTotal);
  //sets win/lose conditions
            if (gamerTotal == Random){
            awesome();
          }
          else if (gamerTotal > Random){
            badGuess();
          } 
    })  
    $('#crystFour').on ('click', function(){
      gamerTotal = gamerTotal + num4;
      console.log("New gamerTotal= " + gamerTotal);
      $('#finalTotal').text(gamerTotal); 
        
            if (gamerTotal == Random){
            awesome();
          }
          else if (gamerTotal > Random){
            badGuess();
          }
    });   
  }); 