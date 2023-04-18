
function showProgress() {
    document.getElementById('progress').style.display = 'block';
}

function swipeIcon(x) {
  x.classList.toggle("iconSwipe");
}

$(function () {
	
	//var coll = document.getElementsByClassName("collape");
	var coll = $('.collape');
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		  console.warn("tot")
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	  });
	}

	
	
	$.fn.swipeNav = function(options) {
		var options = $.extend( {
			menu : this,
			menuBtn : $('#menuBtn'),
			body : $(document.body),
			menuSpeed : 300,
		}, options);

		var menuWidth = options.menu.width();
		$(document.body).css({
			'overflow-x' : 'hidden',
			'position': 'relative',
			'left' : 0,
		});
		options.menu.css({
			'position' : 'fixed',
			'top' : 0,
			'left': - menuWidth + 'px',
			'width': + menuWidth + 'px',
			'height' : 100 + '%',
		});
		options.menuBtn.on('click',function(){
		    options.body.toggleClass('open');
	        if(options.body.hasClass('open')){
	            options.body.animate({'left' : menuWidth }, options.menuSpeed);
	            options.menu.animate({'left' : 0 }, options.menuSpeed);
	        } else {
	            options.menu.animate({'left' : -menuWidth }, options.menuSpeed);
	            options.body.animate({'left' : 0 }, options.menuSpeed);
	        }
	    });
    }
});

$(function () {

	//Google Font
	WebFontConfig = {
		google: { families: [ 'Raleway::latin' ] }
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();

	//Page Action
	$(document).on('click','#swipeNav li a',function(){
		var href= $(this).attr("href");
		switch(href){
			case '#license':
				$('#main').load('license.html');
				return false;
			break;
			case '#src':
				$('#main').load('src.html');
				return false;
			break;
		}
	});

	//jQueryPlug-in Slide-Nav
	$('#swipeNav').swipeNav();
});