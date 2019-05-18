/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase)
   {
     this.phrase = phrase.toLowerCase();
     //the above is context for the Phrase
     //lowercase conversion
   }//constructor ends

   //Methods
   addPhraseToDisplay()
   {

     let arr = [...this.phrase];
     console.log(arr);

     arr.forEach(letter =>
     {
      let li = $(`<li>${letter}</li>`);
      if(letter !== ' ')
      {
        li.addClass("letter");
        $('ul').append(li);
      }
      else
      {
        let li = $(`<li>${letter}</li>`);
        li.addClass("space");
        $('ul').append(li);
      }
      return letter;
    });//forEach loop ends

    };//addPhraseToDisplay() ends

    checkLetter(selectedLetter)
    {
      let target = false;
      $('#phrase ul li').each((index, value) =>
      {
        let $value = $(value).text();

        if ($value === selectedLetter)
        {
          target = true;
        }
       });//each loop ends
       return target;
    };//checkLetter() ends should return a boolean

    showMatchedLetter(selectedLetter)
    {
     $('#phrase ul li').each(function()
     {
       if ($(this).text() === selectedLetter)
       {
         $(this).removeClass();
         $(this).addClass('show');
       }//conditinal statement ends
      });//each loop ends
    }//end of showMatchedLetter()



   };//class end
