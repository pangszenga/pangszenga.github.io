$(document).ready(function(){

  //Global Variables
  const $primaryFields = $("#name, #mail").toArray();
  const $emailField = $("#mail")[0];
  const $title = $("#title");
  const $design = $("#design");
  const $color = $("#colors-js-puns");
  const $payment = $("#payment");


  //Validation variables
    const mailRegex = /^[^@\s]+@[^@\s.]+\.[a-z]{1,256}$/i;
    const cardRegex = /^(\d{1,4}[- ]+){3}\d{1,4}|\d{13,16}$/;
    const zipRegex = /^\d{5}$/;
    const cvvRegex = /^\d{3}$/;

    let nameError = $("<p>Please enter in your name e.g. John Pears</p>");
    let mailError = $("<p>Please enter in your email e.g. mail@forexample.com</p>");
    let roleError = $("<p>Please enter in your role e.g. Builder</p>");
    let cardError = $("<p>Please enter in your card number e.g. 1234-1234-1234-1234</p>");
    let zipError = $("<p>Please enter your zip code e.g. 85055</p>");
    let cvvError = $("<p>Please enter your cvv e.g. 123</p>");
    let checkBoxError = $("<p>Please select at least one</p>");


    let mailEg = $("<p>For example mail@forexample.com</p>");
    let missingAt = $("<p>You are missing your '@'</p>");
    let empty = $("<p>Please do not leave this blank</p>");

  //Setup page
  $primaryFields[0].focus();         //focus on the first field
  $("#otherTitle").hide();    //hide other title textbox
  $color.hide();              //hide colors until theme selected
  $payment.val("credit card");//default selection for payment
  $("#paypal").hide();        //hide paypal helptext
  $("#bitcoin").hide();       //hide bitcoin helptext




  //FUNCTIONS
  //Function to update price of selected activities
  function priceTotal() {
    let price = 0;
    $("input:checked").each(function()
    {
      //look value of selected activity
      price += parseFloat(this.value);
    });//end of loop
    $('#total').val("$" + price.toFixed(2));
  }//end of function



  //EVENT LISTENERS
  //Title selection
  $title.on("change", function(e)
  {
    let $selected = $(this).val();

    if($selected === "other")
    {
      $("#otherTitle").show();
    }
    else
    {
      $("#otherTitle").hide();
    }
  });//end of event listener

  //Theme selection
  $design.on("change", function(e)
  {
    let $selected = $(this).val().toLowerCase();
    console.log($selected);
    if($selected === "js puns")
    {
      $color.show();
      //hide I &#9829; JS shirt only
      $('#color option[value="cornflowerblue"]').show();
      $('#color option[value="darkslategrey"]').show();
      $('#color option[value="gold"]').show();
      $('#color option[value="tomato"]').hide();
      $('#color option[value="steelblue"]').hide();
      $('#color option[value="dimgrey"]').hide();
    }
    else if($selected === "heart js")
    {
      //hide JS Puns shirt only
      $color.show();
      //hide I &#9829; JS shirt only
      $('#color option[value="tomato"]').show();
      $('#color option[value="steelblue"]').show();
      $('#color option[value="dimgrey"]').show();
      $('#color option[value="cornflowerblue"]').hide();
      $('#color option[value="darkslategrey"]').hide();
      $('#color option[value="gold"]').hide();
    }
    else
    {
      $color.hide();
    }

  });//end of event listener

  //Activity selection
  $("input").on( "change" , function (e)
  {
    let $selected = e.target;
    //activities --> boolean returned

    let frameworks = $('input[name="js-frameworks"]').is(":checked");
    let libs= $('input[name="js-libs"]').is(":checked");
    let express= $('input[name="express"]').is(":checked");
    let node = $('input[name="node"]').is(":checked");

    //conditional selection --> Looking for the selection and clashes
    if (frameworks == true)
    {
      $('[type="checkbox"][name="express"]')[0].disabled = true;
    }
    else if (frameworks == false)
    {
      $('[type="checkbox"][name="express"]')[0].disabled = false;
    };//end
     if (libs == true)
    {
      $('[type="checkbox"][name="node"]')[0].disabled = true;
    }
    else if (libs == false)
    {
      $('[type="checkbox"][name="node"]')[0].disabled = false;
    };//end
    if (express == true)
    {
      $('[type="checkbox"][name="js-frameworks"]')[0].disabled = true;
    }
    else if (express == false)
    {
      $('[type="checkbox"][name="js-frameworks"]')[0].disabled = false;
    };//end
    if (node == true)
    {
      $('[type="checkbox"][name="js-libs"]')[0].disabled = true;
    }
    else if (node == false)
    {
      $('[type="checkbox"][name="js-libs"]')[0].disabled = false;
    };// end of conditional statement

    priceTotal();

  });//end of event listener

  //Payment section
  $payment.on( "change" , function(e)
  { //Setting booleans
    let blank = $('#payment option[value="select_method"]').is(":selected");
    let creditCard = $('#payment option[value="credit card"]').is(":selected");
    let paypal = $('#payment option[value="paypal"]').is(":selected");
    let bitcoin = $('#payment option[value="bitcoin"]').is(":selected");

    //condtional statement to check what is selected
    if (creditCard == true)
    {
      $("#credit-card").show()
      $("#paypal").hide();
      $("#bitcoin").hide();
    }
    else if (paypal == true)
    {
      $("#credit-card").hide()
      $("#paypal").show();
      $("#bitcoin").hide();
    }
    else if (bitcoin == true)
    {
      $("#credit-card").hide()
      $("#paypal").hide();
      $("#bitcoin").show();
    }
    else if (blank == true)
    {
      $("#credit-card").hide()
      $("#paypal").hide();
      $("#bitcoin").hide();
      checkBoxError.insertAfter($('#payment'));
    };//end of conditional statement

  });//end of event listener

  //Real time validation
  $("#name").on("blur", function (e)
  {
    let input = $(this).val();
    if(input.length === 0)
    {
      empty.insertAfter($("#name"));
    }
    else
    {
      empty.remove();
      $("#name").removeClass("borderClass");
    }
  });//end of listener

  $("#mail").on("blur", function (e)
  {
    let mailV = $('#mail').val();
    let input = $(this).val();

    if(input.length === 0) {
      empty.insertAfter($("#mail"));
      mailEg.remove();
      missingAt.remove();
    }
    else if (mailV.includes("@")==false)
    {
      missingAt.insertAfter($("#mail"));
      mailEg.remove();
      empty.remove();
    }
    else if ((mailRegex.test(mailV)))
    {
      empty.remove();
      mailEg.remove();
      missingAt.remove();
      $("#mail").removeClass("borderClass");

    } else
    {
      missingAt.remove();
      empty.remove();
      mailEg.insertAfter($("#mail"));
    };//end of conditional statement
  });//end of listener




  //Check fields before submitting
  $("form").on("submit", function (e)
  {
    //Look at these elements when form is about to be submitted
    let nameV = $('#name').val();
    let mailV = $('#mail').val();
    let roleCheck= ($('[value="other"]').is(':selected'));
    let roleV= $('#otherTitle').val();
    let paymentCheck = ($('[value="credit card"]').is(':selected'));
    let cardV= $('#cc-num').val();
    let zipV =  $('#zip').val();
    let cvvV = $('#cvv').val();
    let checkboxes = ($("input:checkbox").is(":checked"));
    //Name Field
    if(nameV.length === 0)
    {
      event.preventDefault();
      $("#name").addClass("borderClass");
      nameError.insertAfter($("#name"));
      empty.remove();
    }
    else
    {
      $("#name").removeClass("borderClass");
      nameError.remove();
    };// end of conditional statement

    //mail Field
    if(!mailRegex.test(mailV))
    {
      event.preventDefault();
      $("#mail").addClass("borderClass");
      mailError.fadeIn().insertAfter($("#mail"));
    }
    else if (mailRegex.test(mailV))
    {
      $("#mail").removeClass("borderClass");
      mailError.remove();
    };// end of conditional statement

    //Role Field
    if (roleCheck == true)
    {
      if(roleV.length === 0 )
      {
        event.preventDefault();
        $("#otherTitle").addClass("borderClass");
        roleError.fadeIn().insertAfter($("#otherTitle"));
      }
      else
      {
        $("#otherTitle").removeClass("borderClass");
        roleError.remove();
      };// end of conditional statement

    };//end of conditional statement

    //Payment Fields
    if (paymentCheck == true)
    {
      if(!cardRegex.test(cardV))
      {
        event.preventDefault();
        $("#cc-num").addClass("borderClass");
        cardError.fadeIn().insertAfter($("#cc-num"));
      }
      else if (cardRegex.test(cardV))
      {
        $("#cc-num").removeClass("borderClass");
        cardError.remove();
      };// end of conditional statement

      if(!zipRegex.test(zipV))
      {
        event.preventDefault();
        $("#zip").addClass("borderClass");
        zipError.fadeIn().insertAfter($("#zip"));
      }
      else if (zipRegex.test(zipV))
      {
        $("#zip").removeClass("borderClass");
        zipError.remove();
      };// end of conditional statement

      if(!cvvRegex.test(cvvV))
      {
        event.preventDefault();
        $("#cvv").addClass("borderClass");
        cvvError.fadeIn().insertAfter($("#cvv"));
      }
      else if (cvvRegex.test(cvvV))
      {
        $("#cvv").removeClass("borderClass");
        cvvError.remove();
      };// end of conditional statement

      if ($('#payment option[value="select_method"]').is(":selected") == true)
      {
        console.log("blank");
        e.preventDefault();
        checkBoxError.fadeIn().insertAfter($('#payment'));
      };//end of conditional statement
    };//end of conditional statement

    //checkboxes
    if (checkboxes == false)
    {
       event.preventDefault();
       checkBoxError.fadeIn().insertAfter($("#total"));
       checkBoxError.css('color','red');
    }
    else
    {
       checkBoxError.remove();
    }

  });//end of event listener

});//end of page load
