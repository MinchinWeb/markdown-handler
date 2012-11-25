/* CREATE TOC */

function createTOC() {
	var headers = $("h1, h2, h3, h4, h5"),
		toc = $("<ul></ul>");
	if (!headers.length) {
		return false;
	}
	headers.each(function (index) {
		var $elem = $(this),
			headerId = $elem.attr('id');
		if (!headerId) {
			headerId = "header-" + index;
			$elem.before($("<a name=\"" + headerId + "\">"));
		}
		toc.append($("<li class=\"" + $elem.prop("tagName") + "\"><a href=\"#" + headerId + "\">" + $elem.html() + "</a></li>"));
	});
	
	return toc;
}

$(function () {
    // Set page title to the first H1
    $(this).attr("title", $("h1").first().text());

    // If there is a contents div then create the TOC and associated divs
    if ($("#contents").length) {
	var toc = createTOC();
	if (toc) {
		$("#contents").html(toc);
	}

	$("#contents").wrap('<div id="contentsWrapper" />');

	$('<div id="contentsTab">Contents</div>').appendTo("#contentsWrapper");

	var offset = $("#contentsWrapper").offset().top - parseFloat($('#contentsWrapper').css('marginTop').replace(/auto/, 0));
	var topPadding = 15;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$("#contentsWrapper").addClass('fixed');
	        } else {
			$("#contentsWrapper").removeClass('fixed');
		};
     	});
    	$("#contentsTab").click(function(event) {
        	event.stopPropagation();
		if ($("#contentsWrapper").css("left") == '-319px') {
			$("#contentsWrapper").animate({left: '0px'}, 500);
		} else {
			$("#contentsWrapper").animate({left: '-319px'}, 500);
    		}
   	});
};


});
