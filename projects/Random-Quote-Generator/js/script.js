/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/
//Variables
const quotes = [{"quote": "I think, therefore I am",
               "source":"Rene Descarte",
               "citation":  "Discourse on the method",
               "category": "philosophical"},

              {"quote": "The true value of a human being is determined primarily by the measure and the sense in which he has attained to liberation from the self.",
               "source":"Albert Einstein",
               "citation":  "How I see the world",
               "category": "philosophical"},

              {"quote": "I never dreamed about success. I worked for it.",
               "source":"Estée Lauder",
               "citation": "A sucess story",
               "category": "motivational"},

              {"quote": "And here you are living, despite it all",
               "source":"Rupi Kaur",
               "citation": "Milk and honey",
               "category": "romance"},

              {"quote": "I write, because you exist",
               "source":"Michael Faudet",
               "citation": "Dirty Pretty Things",
               "category": "romance"}
               ];

let quote = document.getElementsByClassName("quote")[0];
let source = document.getElementsByClassName("source")[0];
let citation = document.getElementsByClassName("citation")[0];

//Functions

function getRandomQuote() {
  //loop through array to "stick" generated number with the array item
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];
  return randomQuote;

}//end of function


function printQuote() {
  let rawQuote = getRandomQuote();
  //access properties
  const newQuote = rawQuote.quote;
  const newSource = rawQuote.source;
  const newCitation = rawQuote.citation;
  const newCategory = rawQuote.category;

  //replace innerhtml
  quote.innerHTML = newQuote;
  citation.innerHTML = newCitation;
  source.innerHTML = ` ${newSource} <span class="citation"> ${newCitation} </span>
                      <span class="year"></span>`;
  let year = document.getElementsByClassName("year")[0];
  year.className = "years";

  //conditional statement to change background color depending on genre
  if (newCategory === "philosophical")
  {
    document.body.style.backgroundColor = "#9B91C9";
  }
  else if (newCategory === "romance")
  {
    document.body.style.backgroundColor = "#DF8FA4";
  }
  else if (newCategory === "motivational")
  {
    document.body.style.backgroundColor = "#1468A8";
  }
  else
  {
    document.body.style.backgroundColor = "#36b55c";
  }//end of conditional statement

  //display
  return quote;

} //end of function

//Event Handler
//Click Handler
document.getElementById('loadQuote').addEventListener("click", printQuote);

//Timed Handler
setInterval(printQuote, 3010);
