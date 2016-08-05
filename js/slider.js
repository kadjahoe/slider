



//Pure JavaScript with Fade effect
window.onload = function() {
	var slider = document.getElementById("slider");
	var originalClass = document.querySelectorAll(".pics");
	var counter = 0;
	var sliderNav = document.getElementById("sliderNav");
	var links = sliderNav.getElementsByTagName("a");
	var getClicked = function(link) {
			counter = link;
		};
	setInterval(playSlider, 5000);

	function whatClicked(evt) {
		var x = evt.target.innerHTML;
		var current = x - 1;
		clearInterval(setInterval(playSlider, 5000));
		counter = current;
		for (var i = 0; i < originalClass.length; i++) {
			if (i != counter) {
				originalClass[i].classList.add("hide", "fadeOut");
				links[i].classList.remove("current");
			};
		};
		if (counter === originalClass.length) {
			counter = 0;
		}
		console.log(counter);
		originalClass[counter].classList.remove("hide");
		links[counter].classList.add("current");
		counter++;
	};
	sliderNav.addEventListener("click", whatClicked, false);

	function playSlider() {
		
			for (var i = 0; i < originalClass.length; i++) {
				originalClass[i].classList.add("hide", "fadeOut");
				links[i].classList.remove("current");
			};
			
			if (counter === originalClass.length) {
				counter = 0;
			}
			console.log(counter);
			originalClass[counter].classList.remove("hide");
			links[counter].classList.add("current");
			counter++;
		
		};
};
//JQuery Slider
/*
$(document).ready(function(){

$("#slider > div:gt(0)").hide();

setInterval(function(){
	$('#slider > div:first')
	.fadeOut(1000)
	.next()
	.fadeIn(1000)
	.end()
	.appendTo('#slider');
}, 3000);



});

*/
// Pure JavaScript Slider without Fade
/*


window.onload = function() {
	var slider = document.getElementById("slider");
	console.log(slider);
	var originalClass = slider.getElementsByClassName("pics");
	console.log(originalClass.length);
	var counter = 0;
	
		setInterval(playSlider, 5000);

	
		
	
	function playSlider(){
		for (var i = 0; i < originalClass.length; i++) {
			
				originalClass[i].classList.add("hide");
			
		}; 
			
			if(counter === originalClass.length){
				counter = 0;
					
			}
			console.log(counter);
			originalClass[counter].classList.remove("hide");
			counter++;
				
	};
	
	
};


*/