"use strict";

/*
Final project CIS 370
 going to the races
 * Date - 11/14/20
 * @author Helen Lee with help from W3Schools and Peter M through Stack OverFlow
 */
 
  window.alert("Who will win the race between the Vampire vs Werewolf?"); 
 

 function myMove() {
  var elemVampire = document.getElementById("vampire");
  var elemWerewolf = document.getElementById("werewolf");
  var elemVampireWin = document.getElementById("vampireWin");
  var elemWerewolfWin = document.getElementById("werewolfWin");
   
  var posVampire = 0;
  var posWerewolf = 0;
  
    var hasWinner = false;
  elemVampireWin.style.display = 'none';
  elemWerewolfWin.style.display = 'none';
  
  var id = setInterval(frame, 5)
  function frame() {
	  
	  if(posVampire >= 1000 && posWerewolf >= 1000)
    {
      clearInterval(id);
      return;
    }
	if(posVampire < 1000)
	{
		posVampire +=10*Math.random(); 
		
		if(posVampire >= 1000)
		{
		posVampire = 1000;
		if(!hasWinner){
			hasWinner = true;
		     elemVampireWin.style.display = 'unset';
        }
              }
      elemVampire.style.left = posVampire + 'px';
    }
		
if(posWerewolf < 1000)
    {
      posWerewolf += 10*Math.random();
      if(posWerewolf >= 1000)
      {
        posWerewolf = 1000;
        if(!hasWinner){
          hasWinner = true;
          elemWerewolfWin.style.display = 'unset';
        }
      }
      elemWerewolf.style.left = posWerewolf + 'px';
    }
  }
}


