//when mouse click, append text

$(document).ready(function(){

  const card1 = $("#card1");
  const card2 = $("#card2");
  const card3 = $("#card3");
  const card4 = $("#card4");
  const card5 = $("#card5");
  const card6 = $("#card6");

  const portfolio = $('a[href="#portfolio"]');
  const contact = $('a[href="#contact"]');


  let cover = $(".cover");
  let cardArray = [card1, card2, card3, card4, card5, card6];

  let icons = [portfolio, contact];



  for(let i = 0; i < cardArray.length; i++){

    cardArray[i].on("click", function(e){
      let $selected = $(this).find(".moreDetail");
      let $append = $selected.clone();
      $append.removeClass("hide");
      $append.css("display", "block");
      console.log($selected);

      cover.removeClass("hide");
      $append.appendTo(cover);
      e.preventDefault();// prevent page from bouncing to the top

      function close() {
        $('.cross').on('click', function(e){


            cover.addClass('hide');
            $append.remove();


            });//listener ends
        };//function ends

        close();

      });//listener ends
    }// loop ends

//scroll to view
  document.querySelectorAll('a[href^="#portfolio"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

});//document ready
