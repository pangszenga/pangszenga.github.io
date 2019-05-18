
// search bar

const $photo_list = $('.photo a');
const $searchBar = $('#search');



const filter = function (){
      //create filter by listening to .keyup
      //remove case sensitivity
    const $input = this.value.toLowerCase();
    console.log($input);

    $photo_list.each(function(index, a){
        //Caption text
      const $attr = $(a).attr('title');
       //get attr title
      const $caption = $attr.toLowerCase();
      //remove case sensitivity
      console.log($caption);

      if ($caption.includes($input)){
        // Display matching results
        a.parentElement.style.display = "block";
        console.log('yes');

      } else {
       // Hide non-matching results
        a.parentElement.style.display = "none";
        console.log('no');
      }
    });
};

$searchBar.on('keyup', filter);


//Rebox - lightbox

$('.grid').rebox({ selector: 'a' })
