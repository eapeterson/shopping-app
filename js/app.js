$(document).ready(function() {
	var activeList = '#list-grocery';
	var activeTitle = '.grocery';
	$('.container').on('click', '#add-items', addItemFunc);
	$('#add-box').on('keydown', function (event) {
		if(event.which == 13) {
			addItemFunc(event);
		}
	})

	function addItemFunc (event) {
		var text = $('#add-box').val();
		$('#add-box').val('');
		if(text.length){
			$('<li />', {html:text}).prependTo('ul.' + activeList);
		}	
	}

	$('.container').on('click', 'ul.list li', function(event){
		$(this).toggleClass('purchased');
		/*console.log('purchased item')*/
	})
/*This is not working*/
	$('.container').on('click', '#reset-items', function(event){
		console.log('removing selected');
		$('ul.' + activeList + ' li.purchased').remove();
	})

	$('.container').on('click', '#saved', function(){
		$('#nextlist').show();
	})

	$('.container').on('click', '#nextlist', function(event) {
		event.preventDefault();
			if(activeList == '#list-grocery'){
			activeList = '#list-todo';
			} else if(activeList == '#list-todo') {
			activeList = '#list-hardware';
			} else if(activeList == '#list-hardware') {
			activeList = '#list-grocery';
			}
			if(activeTitle == '.grocery'){
			activeTitle = '.todo';
			} else if(activeTitle == '.todo') {
			activeTitle = '.hardware';
			} else if(activeTitle == '.hardware') {
			activeTitle = '.grocery';
			}
			showActiveList();
			showActiveTitle();
	})

	function showActiveList () {
		$('.list').hide();
		$('ul.' + activeList).show();
	}

	function showActiveTitle () {
		$('h2').hide();
		$('h2' + activeTitle).show();
	}
});
