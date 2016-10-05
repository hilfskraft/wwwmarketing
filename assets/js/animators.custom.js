(function() {
	window.onload = function(){
		var animityElement = document.querySelectorAll('[animity]');
		for (var i = animityElement.length - 1; i >= 0; i--) {
			var id = 'animity-'+i+'-e-reaper';
			animityElement[i].setAttribute('id',id);
			targetToanimate = document.getElementById(id);
			if (targetToanimate.getAttribute('animity') == 'typing') {
				typity(targetToanimate);
			}
			else if (targetToanimate.getAttribute('animity') == 'bring-from-left') {
				slideIn(targetToanimate,left);
			}
		}
	}

	function typity(targetToanimate){
		var counter = 0;
		var text = targetToanimate.innerHTML;
		targetToanimate.innerHTML = '';
		var typer = setInterval(function(){
			var x = targetToanimate.innerHTML;	
			targetToanimate.innerHTML = x + text[counter];
			counter++;
			if (counter == text.length ) {
				clearInterval(typer);	
			} 
		},100);
	}

	function slideIn(targetToanimate,direction){
	}
})()