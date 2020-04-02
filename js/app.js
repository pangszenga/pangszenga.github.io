$(document).ready(function(){
	
	let portfolio = document.getElementsByClassName("portfolio")[0];
	let title     = document.getElementsByClassName("title")[0];
	let showBtn   = document.getElementsByClassName("button")[0];
	let backBtn   = document.getElementsByClassName("button")[1];
	let showcase  = document.getElementsByClassName("showcase");

	function showPortfolio() {
		portfolio.scrollIntoView()
	}

	function showAboutMe()  {
		title.scrollIntoView();
	}

	function showHide(item, index) {
		console.log(item)
	}

	showBtn.addEventListener("click", function () {
		showPortfolio()
	});

	backBtn.addEventListener("click", function () {
		showAboutMe()
	});

	// showcase.forEach(showHide);

});//document ready
