var d = document;
var $ = function(e){return d.querySelector(e)}
var banner = JSON.parse(obj);
window.onload = function(e){

	///////Function automate animation
	function animationElements(element,classAnimation,timer){
		var timerSeconds = timer*1000; 
		setTimeout(
			function(){
				for(var i=0;i<element.length;i++){

					window['elementMoment'+i] = element[i];
					var allElements = document.querySelectorAll(window['elementMoment'+i]);
					for ( var u = 0; u < allElements.length; u++ ) {
					    allElements[u].classList.add(classAnimation);
					}

				}
		},timerSeconds);
	}

	//animationElements(["element #ID OR .CLASS"],"CLASS",Animation time);
	/*STEP1*/
	animationElements([".bg"],"animaBG",.1);

	animationElements([".button"],"animaBG",.5);
}
