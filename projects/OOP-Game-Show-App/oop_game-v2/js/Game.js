/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor (score)
   {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrases = null;
   }

   createPhrases() {
    const array = [new Phrase('Apple Crumble'),
                   new Phrase('Peach Cobbler'),
                   new Phrase('Strawberries and Cream'),
                   new Phrase('French Macarons'),
                   new Phrase('Chocolate Banana Crepes'),
                   new Phrase('Orange Cardamom Madeleines'),
                   new Phrase('Blueberry Violet Eclairs')
                  ];
    return array;
  }

   getRandomPhrase()
   {
     const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
     return randomPhrase;
   }//getRandomPhrase() ends

   startGame()
   {
     $("#overlay").hide();
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }//startGame() ends

   checkForWin()
   {
     //how many hidden letters remaining? (return BOOLEAN)
     let hiddenLetter = $("#phrase ul li[class*='letter']");
     if (hiddenLetter.length === 0)
     {
        return true;
     }
     else
     {
        return false;
     }//conditional statement ends


   }//checkForWin() ends

   removeLife()
   {
     this.missed += 1;
     let heart = $('.tries');

     heart[this.missed -1].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';

   }//removeLife() ends

   gameOver(gameOver)
   {
     //game lost
     if (gameOver)
     {
       $("#overlay").show();
       $("#overlay").removeClass("win");
       $("#overlay").addClass("lose");
       $("#game-over-message").text("GAME OVER");
     }
     else
     {
       $("#overlay").show();
       $("#overlay").removeClass("lose");
       $("#overlay").addClass("win");
       $("#game-over-message").text("You win, play again?");
     }//conditional statement ends

   }//gameOver() ends

   reset()
   {
     $("#btn__reset").on("click", () =>
     {
       this.missed = 0;
       $('#phrase ul li').remove();
       $('#overlay').removeClass().addClass('start');
       $('.keyrow button').removeClass().addClass('key').attr('disabled', false);
       $('#scoreboard ol li img').attr('src', 'images/liveHeart.png');
       this.startGame();
     });//click handler ends

   }//reset() ends

   handleInteraction(letter)
   {
     if (letter.tagName === "BUTTON")
     {
       //checkForWin and removeLife
       let letterSelected = letter.textContent;
       let checkLetter = this.activePhrase.checkLetter(letterSelected);

       console.log(letter);
       letter.setAttribute("disabled", true);
       letter.className = "chosen";

       if (checkLetter === false)
       {
         //incorrect
         console.log("incorrect");
         this.removeLife();

         //check if gameover
         if (this.missed === 5)
         {
           this.gameOver(true);
           this.reset();
         }//conditional statement ends
       }
       else
       {
         //correct
         console.log("correct");
         this.activePhrase.showMatchedLetter(letterSelected);

         this.checkForWin();

         if (this.checkForWin() === true)
         {
           this.gameOver(false);
           this.reset();
         }//conditional statement ends

       }//conditional statement ends

     }

   };//handleInteraction();



 }//Game class ends
