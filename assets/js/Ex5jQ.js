$(function(){
	$(document).keypress(function(event) {
		horizontalPosition = $('#carré').outerWidth(true)-$('#carré').outerWidth();
		verticalPosition = $('#carré').outerHeight(true)-$('#carré').outerHeight();
		if (event.keyCode == 37) {// Gauche
			horizontalPosition -= 10;
			$('#carré').css('margin-left',horizontalPosition);
		} else if (event.keyCode == 38) {// Haut
			verticalPosition -= 10;
			$('#carré').css('margin-top',verticalPosition);
		} else if (event.keyCode == 39) {// Droite
			horizontalPosition += 10;
			$('#carré').css('margin-left',horizontalPosition);
		} else if (event.keyCode == 40) {// Bas
			verticalPosition += 10;
			$('#carré').css('margin-top',verticalPosition);
		}
	});
});