$(document).ready(function(){
	
	let portfolio = document.getElementsByClassName("portfolio")[0];
	let aboutMe = document.getElementsByClassName("aboutMe")[0];
	let showBtn = document.getElementsByClassName("button")[0];

	// portfolio.style.display = "none";
	// aboutMe.style.display = "block";

	function showPortfolio() {
		portfolio.scrollIntoView()
	}

	showBtn.addEventListener("click", function () {
		showPortfolio()
	});

	console.log("HI")

});//document ready
