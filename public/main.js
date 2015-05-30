$( document ).ready(function() {
	$('.hideshow').on('click', function(event) {        
		$(this).next('div').toggle('show');
	});
});