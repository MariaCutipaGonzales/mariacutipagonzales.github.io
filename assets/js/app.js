$(".button-collapse").sideNav();

var typing = new Typed(".type",{
     strings: ["La tecnología","El código","Ser creativa","¡ T O D O !"],
     typeSpeed: 100,
     backSpeed:80,
     loop:true
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 20 ){    
 		$('nav').addClass('show');
    } else {
        $('nav').removeClass('show');
 	};   	 
});

 $('a[href="#aboutme"]').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 2000, 'linear');
 });

new WOW().init();