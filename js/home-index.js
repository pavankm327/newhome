

(function ($) {
    "use strict"; // Start of use strict
//$(window).resize(function(){location.reload();});
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });




    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav, .right_bar,.top_bar,.top_menubar").addClass("navbar-shrink");
        } else {
            $("#mainNav,.right_bar,.top_bar,.top_menubar").removeClass("navbar-shrink");
        }
    });
    var a = 1;
    $('.right_bar_toggler').click(function () {
    	$.scrollify.destroy();
		$('.right_bar').addClass('open menubar');
        $('.menu_items').show();
        $('.admission_menu').hide();
        //$('body').removeClass('noScroll');
        $(this).addClass('clicked');
        $('.right_bar_admission,.right_bar_search').hide();
        setTimeout(function () {
            $(".close_btn").addClass("selected");
            $(".close_btn2").removeClass("selected");
        }, 200);
        b = 1;
	});
    //var wd = $(window).width();
    var b = 1;
    $(".right_bar_admission").on('click', function () {
        //if(wd < 992){
        if (b == 1) {
            b = b + 1;
            a = 1;
           // alert('hello');
    		$.scrollify.destroy();
            $('.right_bar').addClass('open');
            $('.menu_items').hide();
            $('.right_bar_toggler').removeClass('clicked');
            $('.admission_menu').show();
            //$('body').addClass('noScroll');
            $(this).addClass('clicked');
            setTimeout(function () {
                $(".close_btn").removeClass("selected");
				$(".close_btn2").addClass("selected");
            }, 200);
        }
        else {
			$.scrollify();
            b = 1;
            //alert('hello'+b);
            $('.right_bar').removeClass('open');
            $('.admission_menu').hide();
            //$('body').removeClass('noScroll');
            $(this).removeClass('clicked');
			
    	
        }
        //}
        /* else{
        $('.right_bar').removeClass('open');
        $('.admission_menu').hide();
        $('body').removeClass('noScroll');
        $(this).removeClass('clicked');
        } */
    });
    $('.right_bar_search').click(function () {
        $('.searchoverlay').addClass('open');
        //$('body').addClass('noScroll');
    });
    $('.close_btn').click(function () {
        $.scrollify();
		$('.right_bar').removeClass('open menubar');
        $('.menu_items').hide();
        $('.right_bar .right_bar_toggler,.right_bar_admission').removeClass('clicked');
        $('.right_bar_admission,.right_bar_search').show();
        setTimeout(function () {
            $(".close_btn").removeClass("selected");
        }, 200);
    });
	
		$('.admission_links>a').on('click',function () {
        $('.admission_box').slideToggle();
		$('.universe_box').slideUp();
		$.scrollify.destroy();
    });
    
    $('.universe_links>a').on('click',function () {
        $('.universe_box').slideToggle();
		$('.admission_box').slideUp();
		$.scrollify.destroy();
    });
   
	
	
	
/*	$('.admission_links').on('mouseenter',function () {
        $('.admission_box').slideDown();
		$('.universe_box').slideUp();
		$.scrollify.destroy();
    });
    $('.admission_box').on('mouseleave',function () {
        $('.admission_box').slideUp();
		$.scrollify();
    });
    $('.universe_links').on('mouseenter',function () {
        $('.universe_box').slideDown();
		$('.admission_box').slideUp();
		$.scrollify.destroy();
    });
    $('.universe_box').on('mouseleave',function () {
        $('.universe_box').slideUp();
		$.scrollify();
    });*/
   $('.admission_box .close_btn2').click(function () {
        $('.admission_box').slideUp();
		$.scrollify();
    });
   $('.career_btn').mouseenter(function () {
        $('.universe_box').slideUp();
		$.scrollify();
    });
   $('.universe_box .close_btn2').click(function () {
        $('.universe_box').slideUp();
		$.scrollify();
    });
    $('.close_btn2').click(function () {
        $.scrollify();
		$('.right_bar').removeClass('open');
        //$('.admission_menu').hide();
        $('.right_bar .right_bar_toggler,.right_bar_admission').removeClass('clicked');
        $('.right_bar_toggler,.right_bar_search').show();
		b = 1;
        setTimeout(function () {
            $(".close_btn2").removeClass("selected");
        }, 200);
    });
    $('.closesearch').click(function () {
        $('.searchoverlay').removeClass('open');
        //$('body').removeClass('noScroll');
    });

    /*$(".right_bar_admission").on('mouseenter', function () {
    //$(".right_bar_admission").on('click', function () {
    a=1;
    $('.right_bar').addClass('open');		
    $('.menu_items').hide();
    $('.right_bar_toggler').removeClass('clicked');
    $('.admission_menu').show();
    $('body').addClass('noScroll');
    $(this).addClass('clicked');    
    });*/

    $('#myTab a').click(function (e) {
        e.preventDefault();
        //alert($(this).attr("href"));
        $('#myTab a.active').removeClass('active');
        $(this).addClass('active');
        $(this).tab('show');
        $('.testimonials_section .tab-pane.active').removeClass('active');
        $($(this).attr("href")).addClass('active');
    });
    var slmwd = $(window).width();
    if (slmwd < 576) {
        //alert('574');
        $(".row.tab-panel,.admission_menu .last_date").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '20') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });
    }
    if (slmwd < 992 && slmwd > 575) {
        //alert('778');
        $(".row.tab-panel").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '15') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });
		
		
        $(".admission_menu .last_date").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '100') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });
		
        $(".navbar-collapse .navbar-nav").slimscroll({
            height: ($(window).height() - '65') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px"
        });
    }
	if (slmwd >= 1600) {
        //alert('>1600');
		$("#mainNav #Graduate .menu_nav,#mainNav #Post_Graduate .menu_nav").slimscroll({
			height: '550',
			//color: "rgba(0,0,0,0.2)",
			size: "8px"
		}); 

        $(".row.tab-panel").slimscroll({
            height: ($(window).height() - '200') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });	

        $('.nav-item').on("mouseenter", function () {
            //alert('hello')
            if ($(this).children(".mega_menu").length > 0) {
                //alert($(this).children(".mega_menu"));
				$.scrollify.destroy();
                $(this).parents('#mainNav').addClass('hasMegaMenu');
            }
        });
        $('.nav-item').on("mouseleave", function () {
            //alert('hello')
            if ($(this).children(".mega_menu").length > 0) {
                //alert($(this).children(".mega_menu"));
				$.scrollify();
                $(this).parents('#mainNav').removeClass('hasMegaMenu');
            }
        });
		
		/*$(".admission_menu .last_date").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '225') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });*/
        $(".row.tab-panel").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '100') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });	
        $(".tab-pane.active").addClass("selected");
        $(".nav-tabs li a").click(function () {
            $(".accordion-link").next().removeClass("selected");
            //alert('sdfdg');
            setTimeout(function () {
                $(".accordion-link.active").next().addClass("selected");
            }, 200);
        });
    }
    else {
        //alert('>778');
        /*$(".admission_menu .last_date").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '225') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });*/
        $(".row.tab-panel").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '100') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
			alwaysVisible:true,
			railVisible:true
        });		
		$("#mainNav #Graduate .menu_nav,#mainNav #Post_Graduate .menu_nav").slimscroll({
			height: ($(window).height() - '250') + "px",
			//color: "rgba(0,0,0,0.2)",
			size: "8px"
		});
        $('.nav-item').on("mouseenter", function () {
            //alert('hello')
            if ($(this).children(".mega_menu").length > 0) {
                //alert($(this).children(".mega_menu"));
				$.scrollify.destroy();
                $(this).parents('#mainNav').addClass('hasMegaMenu');
            }
        });
        $('.nav-item').on("mouseleave", function () {
            //alert('hello')
            if ($(this).children(".mega_menu").length > 0) {
                //alert($(this).children(".mega_menu"));
				$.scrollify();
                $(this).parents('#mainNav').removeClass('hasMegaMenu');
            }
        });
        $(".tab-pane.active").addClass("selected");
        $(".nav-tabs li a").click(function () {
            $(".accordion-link").next().removeClass("selected");
            //alert('sdfdg');
            setTimeout(function () {
                $(".accordion-link.active").next().addClass("selected");
            }, 200);
        });
		
		$("#mainNav #Graduate .menu_nav,#mainNav #Post_Graduate .menu_nav").slimscroll({		
			height: ($(window).height()- '250') + "px",
			//color: "rgba(0,0,0,0.2)",
			size: "8px"
		});
		
		
		$('#globalcampuslist').slimscroll({		
			height: ($(window).height()- '350') + "px",
			//color: "rgba(0,0,0,0.2)",
			size: "8px"
		});
		

    }

})(jQuery); // End of use strict





$('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});






$('#carouselBanner').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1
});

/**
* EFECTO PARA FLECHAS EN ACORDEON
*/

$(document).on('show', '.accordion', function (e) {
    //$('.accordion-heading i').toggleClass(' ');
    $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide', '.accordion', function (e) {
    $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
    //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});



var wdth2 = $(window).width();
if (wdth2 < 992) {
    var lielm = 'ul.navbar-nav li.nav-item';
    //var lielm2 = '.navbar-collapse .top_bar ul li';
    if ($(lielm).children(".dropdown-menu").length > 0 /*&& $(lielm2).children(".dropdown-menu").length > 0 */) {
        $(lielm).children(".dropdown-menu").prev().addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
        //$(lielm2).children(".dropdown-menu").prev().addClass('dropdown-toggle').attr('data-toggle','dropdown');
    }
    $('.responsive-tabs-container .tab-pane').hide();
    $('.responsive-tabs-container .tab-pane.active').show();
    $('.accordion-link').on('click', function () {
        //$(this).toggleClass('active');		
        $(this).next().slideToggle();		
    });
    $('.mobile_nav_icon').on('click', function () {
        $('#navbarResponsive2').toggleClass('menuopened');
        $(this).toggleClass('open');
    });
}
if (wdth2 < 1200) {$.scrollify.destroy();}
else {
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();



 

$.scrollify({
    section : ".mydiv",
    scrollbars: false,
    setHeights: false,
    offset: -90,
	standardScrollElements: true,
	//interstitialSection: "footer",
    updateHash: false
  });
}


$('.dropdown-submenu a.link').on("click", function (e) {
    $(this).next('ul').toggle();
    $(this).toggleClass('active');
    e.stopPropagation();
    e.preventDefault();
});
$('.responsive_tabs .tab-content').wrap('<div class="tab-container" />');









$('.owl-carouselsec2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.owl-carousel2').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        }
    }
});


$('.owl-carousel4').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.owl-carousel5').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.owl-carousel6').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        }
    }
});


$('.owl-carousel7').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        }
    }
});


$('.owl-carousel8').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        }
    }
});



$('.owl-carousel9').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        }
    }
});


$('.owl-carousel10').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        }
    }
});


$('.owl-carousel11').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});


$('.owl-carousel12').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});
$(document).ready(function () {
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({ rel: 'group1', maxWidth: "95%", maxHeight: "95%" });
    $(".group2").colorbox({ rel: 'group2', transition: "fade" });
    $(".group3").colorbox({ rel: 'group3', transition: "none", width: "75%", height: "75%" });
    $(".group4").colorbox({ rel: 'group4', slideshow: true });
    $(".ajax").colorbox();
    $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
    $(".vimeo").colorbox({ iframe: true, innerWidth: 500, innerHeight: 409 });
    $(".iframe").colorbox({ iframe: true, width: "80%", height: "80%" });
    $(".inline2").colorbox({ inline: true, width: "65%",
        onOpen: function () { $('#colorbox').addClass('inline_content'); },
        onClosed: function () { $('#colorbox').addClass('inline_content'); }
    });
    $(".callbacks").colorbox({
        onOpen: function () { alert('onOpen: colorbox is about to open'); },
        onLoad: function () { alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete: function () { alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup: function () { alert('onCleanup: colorbox has begun the close process'); },
        onClosed: function () { alert('onClosed: colorbox has completely closed'); }
    });

    $('.non-retina').colorbox({ rel: 'group5', transition: 'none' });
    $('.retina').colorbox({ rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true });

    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function () {
        $('#click').css({ "background-color": "#f00", "color": "#fff", "cursor": "inherit" }).text("Open this window again and this message will still be here.");
        return false;
    });

    $(".accordion").on("shown.bs.collapse", function () {
        var myEl = $(this).find('.collapse.show').prev('.accordion-heading');

        $('html, body').animate({
            scrollTop: $(myEl).offset().top - 70
        }, 200);
    });
    $(".collapsible_heading").on("click", function () {
        var myElmt = $(this).parent('.tab-content');

        $('html, body').animate({
            scrollTop: $(myElmt).offset().top - 70
        }, 200);
    });

    /*$(".search-bar input[type=text]").on("click", function () {
        var myElm = $(this).parents('.tab-home-sec1 .responsive-tabs-container');

        $('html, body').animate({
            scrollTop: $(myElm).offset().top - 95
        }, 200);
    });*/
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('body').addClass('mac_safari');}

	







    // $('.accordion-link').on('click',function(){
    //     var aa = this;
    //     setTimeout(function(){ 
    //     var dis = $(aa).next('div').css("display");
    //     if(dis == 'block'){
    //        $(aa).nextUntil().removeClass('active');
    //        $(aa).next().addClass('active');
    //        $(this).addClass('active')
    //     }else if(dis == 'none'){
    //         //$(aa).next('div').removeClass('active');
    //         $(aa).removeClass('active')
    //     }
    // }, 500);
    // })


 

    $(".last_date2").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '60') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
            alwaysVisible:true,
            railVisible:true
        });
    $(".last_date2.last_date22").slimscroll({
            height: ($(window).height() - $("#mainNav").outerHeight() - '60') + "px",
            //color: "rgba(0,0,0,0.2)",
            size: "8px",
            alwaysVisible:true,
            railVisible:true
        });
	var wdt = $(window).width();
	if(wdt<=991){
		//$('.myTabContent').find('.tab-pane').removeClass('fade active').removeAttr('aria-expanded');
		$(".collapsible_heading").click(function(){
		if(false == $(this).next('.accordion-link').next('.tab-pane').is(':visible')){
			if(false == $(this).parent().prevAll().find('.tab-pane').hasClass('open') || false == $(this).parent().nextAll().find('.tab-pane').is('open'))  {
				$('.tab-pane').slideUp(300).removeClass('open');
				$('.collapsible_heading.open').removeClass('open');
				$(this).next('.accordion-link').next('.tab-pane').slideDown(300).addClass('open');
				$(this).addClass('open');
			}
		}
		else{
			$(this).next('.accordion-link').next('.tab-pane').slideUp(300).removeClass('open');
			$(this).removeClass('open');
			}
		});
		$(".footer_collapsible_heading").click(function(){
			$('span.footer_collapse').slideToggle();
			$(this).toggleClass('open');
		});
	}
});

