$(document).ready(function(){
	
	let portfolio = document.getElementsByClassName("portfolio")[0];
	let title     = document.getElementsByClassName("title")[0];
	let showBtn   = document.getElementsByClassName("button")[0];
	let backBtn   = document.getElementsByClassName("button")[1];
	let showArr   = document.getElementsByClassName("showcase");

	let one       = document.getElementsByClassName("prj1")[0];
	let two       = document.getElementsByClassName("prj2")[0];
	let three     = document.getElementsByClassName("prj3")[0];
	let four      = document.getElementsByClassName("prj4")[0];
	let five      = document.getElementsByClassName("prj5")[0];
	let six       = document.getElementsByClassName("prj6")[0];

	let show1     = document.getElementsByClassName("a1")[0];
	let show2     = document.getElementsByClassName("a2")[0];
	let show3     = document.getElementsByClassName("a3")[0];
	let show4     = document.getElementsByClassName("a4")[0];
	let show5     = document.getElementsByClassName("a5")[0];
	let show6     = document.getElementsByClassName("a6")[0];

	// show1.style.visibility = "hidden";
	// show2.style.visibility = "hidden";
	// show3.style.visibility = "hidden";
	// show4.style.visibility = "hidden";
	// show5.style.visibility = "hidden";
	// show6.style.visibility = "hidden";
	

	function showPortfolio() {
		portfolio.scrollIntoView({behavior: "smooth"})
	}

	function showAboutMe()  {
		title.scrollIntoView({behavior: "smooth"});
	}

	showBtn.addEventListener("click", function () {
		showPortfolio()
	});

	backBtn.addEventListener("click", function () {
		showAboutMe()
	});

	one.addEventListener("mouseover", function() {
		show1.style.visibility = "visible";
	})
	one.addEventListener("mouseout", function() {
		show1.style.visibility = "hidden";
	})

	two.addEventListener("mouseover", function() {
		show2.style.visibility = "visible";
	})
	two.addEventListener("mouseout", function() {
		show2.style.visibility = "hidden";
	})

	three.addEventListener("mouseover", function() {
		show3.style.visibility = "visible";
	})
	three.addEventListener("mouseout", function() {
		show3.style.visibility = "hidden";
	})
	
	four.addEventListener("mouseover", function() {
		show4.style.visibility = "visible";
	})
	four.addEventListener("mouseout", function() {
		show4.style.visibility = "hidden";
	})

	five.addEventListener("mouseover", function() {
		show5.style.visibility = "visible";
	})
	five.addEventListener("mouseout", function() {
		show5.style.visibility = "hidden";
	})

	six.addEventListener("mouseover", function() {
		show6.style.visibility = "visible";
	})
	six.addEventListener("mouseout", function() {
		show6.style.visibility = "hidden";
	})

});//document ready
