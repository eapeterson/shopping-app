$(document).ready(function() {
	$('.container').on('click', '#add-items', function(){
		var text = $('#add-box').val();
		if(text.length){
			$('<li />', {html:text}).prependTo('ul.buyitems');
		}
	})

	$('.container').on('click', '#reset-items', function(){
		$('ul').hide();

	})

	$('.container').on('click', '#saved', function(){
		$('#nextlist').show();
		$('#thirdlist').show();
	})

	$('container').on('click', '#nextlist', function() {
		
	})
})