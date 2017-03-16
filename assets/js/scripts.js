
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
	
	$(document).on('click', '.btn-action', function(){
		$('.btn-action').removeClass('btn-active');
		$(this).addClass('btn-active');
		var target = $(this).attr('href');
		$('.form-contacto, .form-presupuesto').css('opacity', '0');
		setTimeout(function(){
			$('.form-contacto, .form-presupuesto').css('display', 'none');	
		}, 500);
		setTimeout(function(){
			$('.'+target).css('display', 'block');
			$('.'+target).css('opacity', '1');
		}, 600);	
		return false;	
	});
	
});
