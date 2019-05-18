/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

game = new Game();


//Start Game
$("#btn__reset").on("click", function(e)
{
  game.startGame();
  game.reset();
});//event listener ends

//Key click handler
$('.keyrow').on("click", ".key", function(e)
{
  game.handleInteraction(e.target);
});//event listener ends

//Keyboard handleInteraction
$(document).on('keypress', function(e)
{
  for(let i = 0; i < $(".key").length; i++)
  {
    if(e.key === $(".key")[i].textContent)
    {
      if($(".key")[i].classList.contains('wrong'))
      {
        e.preventDefault();
      }
      else
      {
        game.handleInteraction($(".key")[i]);
      }
    };//conditional statement ends
  };//for loop ends
});//event listener ends
