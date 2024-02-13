var isMobileView = false;

$(document).ready(function(){
	//alert('ready');
	isMobileView = false;
	$('.menu-option').click(menuOptionSelected);
	$('#left-menu-toggle-id').click(function(){
		toggleLeftMenu(false);
	});
	
	$(window).on('load resize', function() {
		checkMobileView();
	});
	checkMobileView();
});

function menuOptionSelected(){
	$('.menu-option-selected').removeClass('menu-option-selected');
	$(this).addClass('menu-option-selected');
	//show correct content based on button value
	$('.content-div').hide();
	var mc_id = $(this).val();
	$('#'+mc_id).show();
	
	//if mobile view hide menu after selection
	if(isMobileView){
		toggleLeftMenu(false);
	}
}

function toggleLeftMenu(forceMenuMinimize){
	var menuDiv = $('#div-menu-options');
	if(!menuDiv.hasClass('hide-div-menu-options') || forceMenuMinimize){
		//hide menu
		menuDiv.addClass('hide-div-menu-options');
		$('.left-menu').addClass('minimize-left-menu');
		$('.main-div').addClass('remove-main-div-margin');
		$('#left-menu-heading-text').hide();
	}
	else {
		//show menu
		menuDiv.removeClass('hide-div-menu-options');
		$('.left-menu').removeClass('minimize-left-menu');
		$('.main-div').removeClass('remove-main-div-margin');
		$('#left-menu-heading-text').show();
	}
}

function checkMobileView(){
	if ($(this).width() > 1024){
		isMobileView = false;
		return;
	}
	isMobileView = true;
	toggleLeftMenu(true); //force minimize
}