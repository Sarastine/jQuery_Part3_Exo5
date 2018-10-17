$(function(){
	$(document).keypress(function(event) {
		horizontalPosition = $('#carré').outerWidth(true)-$('#carré').outerWidth();
		verticalPosition = $('#carré').outerHeight(true)-$('#carré').outerHeight();
		horizontalLimite = $('#divBorder').innerWidth();
		if (event.keyCode == 37) {// Gauche
			horizontalPosition -= 10;
			if (horizontalPosition < 0) {
				$('#carré').css('margin-left',horizontalLimite-50);
			} else {
				$('#carré').css('margin-left',horizontalPosition);
			}
		} else if (event.keyCode == 38) {// Haut
			verticalPosition -= 10;
			if (verticalPosition < 0) {
				$('#carré').css('margin-top',340);
			} else {
				$('#carré').css('margin-top',verticalPosition);
			}
		} else if (event.keyCode == 39) {// Droite
			horizontalPosition += 10;
			if (horizontalPosition > horizontalLimite-50) {
				$('#carré').css('margin-left',0)
			} else {
				$('#carré').css('margin-left',horizontalPosition);
			}
		} else if (event.keyCode == 40) {// Bas
			verticalPosition += 10;
			if (verticalPosition > 340) {
			$('#carré').css('margin-top',0);
			} else {
				$('#carré').css('margin-top',verticalPosition);
			}
		}
	});
});