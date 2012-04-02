/*
 * Browzr.js | A jQuery Plugin
 * http://www.browzr.org
 * Copyright © 2012 Ryan Altvater
 * Released under the MIT license
 * http://www.browzr.org/license/
 * Date: Monday March 26th, 2012 12:11:38 -0500
 *
 * @name Browzr.js
 * @type jQuery Plugin
 * @requires jQuery v1.7.1
 * @cat Plugins/Windows and Overlays
 * @author Ryan Altvater (http://www.ryanaltvater.com)
 */


;(function($, doc, win){
	"use strict";
	$.fn.browzr = function(){


////////// *OPTIONAL*
////////// Cookie detection (Uncomment the "if" statement to activate cookie detection)
////////// Don't forget to uncomment the correlating "}" below
			// if ($.cookie('browzr') != 1) {


////////// *REQUIRED*
////////// Browser detection (Uncomment the "if" statement to activate browser detection)
////////// Don't forget to uncomment the correlating "}" below
				// .webkit (Chrome, Safari)
				// .mozilla (Firefox)
				// .msie (Internet Explorer)
				// if ($.browser.msie){


////////// *OPTIONAL*
////////// IE version detection (Uncomment the "if" statement to activate IE version detection)
////////// This detection requires browser detection to be active
////////// Don't forget to uncomment the correlating "}" below
					// >= (greater than or equal to)
					// <= (less than or equal to)
					// == (equal to)
					// > (greater than)
					// < (less than)
					// '10'
					// '9'
					// '8'
					// '7'
					// if ($.browser.version <= '8'){


////////// Pop-up HTML and the initial fade-in transition
						$('<div id="overlay"></div><div id="browzr"><div id="warning"><h2>Browser not supported!</h2><p>The website you are trying to view does not support this browser. For the best experience possible, it is recommended that you download Google’s Chrome Frame plugin.</p><div id="chrome-frame"><a href="http://www.google.com/chromeframe">Install Chrome Frame</a></div></div><div id="download"><div id="close"><a>Close</a></div><h2>Don&#39;t want Chrome Frame?</h2><p>Download a supported browser.</p><ul id="browsers"><li id="chrome"><div class="icon"><span>Chrome Icon</span></div><br><a class="install" href="https://www.google.com/chrome">Install</a></li><li id="firefox"><div class="icon"><span>Firefox Icon</span></div><br><a class="install" href="http://www.mozilla.com/firefox">Install</a></li><li id="safari"><div class="icon"><span>Safari Icon</span></div><br><a class="install" href="http://www.apple.com/safari">Install</a></li><li id="ie"><div class="icon"><span>IE Icon</span></div><br><a class="install" href="http://windows.microsoft.com/en-US/internet-explorer/downloads/ie">Install</a></li></ul></div></div>').hide().appendTo('body').fadeIn('fast');


////////// Positioning that centers the pop-up based on the window size
						$(window).resize(function(){
							$('#browzr').css({
								left: ($(window).width() 
								- $('#browzr').outerWidth())/2,
								top: ($(window).height() 
								- $('#browzr').outerHeight())/2
							});
						});
					
						$(window).resize();


/////////// Hover animations for the "Install" buttons (will minify this section in a future release)
						// Google Chrome
    					$('#chrome a.install').mouseover(function(){
        					$('#chrome .icon').stop().animate({
            					opacity: '1'
        					});
    					});
    				
    					$('#chrome a.install').mouseout(function(){
        					$('#chrome .icon').stop().animate({
            					opacity: '0.5'
        					});
    					});
    				
    				
						// Mozilla Firefox
    					$('#firefox a.install').mouseover(function(){
        					$('#firefox .icon').stop().animate({
            					opacity: '1'
        					});
    					});
    				
    					$('#firefox a.install').mouseout(function(){
        					$('#firefox .icon').stop().animate({
            					opacity: '0.5'
        					});
    					});
    				
    				
						// Apple Safari
    					$('#safari a.install').mouseover(function(){
        					$('#safari .icon').stop().animate({
            					opacity: '1'
        					});
    					});
    				
    					$('#safari a.install').mouseout(function(){
        					$('#safari .icon').stop().animate({
            					opacity: '0.5'
        					});
    					});
    				
    				
						// Microsoft Internet Explorer
    					$('#ie a.install').mouseover(function(){
        					$('#ie .icon').stop().animate({
            					opacity: '1'
        					});
    					});
    				
    					$('#ie a.install').mouseout(function(){
        					$('#ie .icon').stop().animate({
            					opacity: '0.5'
        					});
    					});


////////// Fade transition for the "Close" button
						$('#close').click(function(){
							$('#browzr, #overlay').fadeOut('fast');
							$.cookie('browzr', '1', { expires: 14 });
						});


////////// *OPTIONAL*
////////// IE version detection (Uncomment the "}" to activate IE version detection)
////////// This detection requires browser detection to be active
////////// Don't forget to uncomment the correlating "if" statement above
					// }


////////// *REQUIRED*
////////// Browser detection (Uncomment the "}" to activate browser detection)
////////// Don't forget to uncomment the correlating "if" statement above
				// }


////////// *OPTIONAL*
////////// Cookie detection (Uncomment the "}" to activate cookie detection)
////////// Don't forget to uncomment the correlating "if" statement above
			//  }


	};
})( jQuery );


/*
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */


////////// Cookie detection (DO NOT EDIT THIS FUNCTION) 
(function($){
	$.cookie = function(key, value, options){
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)){
            options = $.extend({}, options);
			if (value === null || value === undefined){
                options.expires = -1;
            }
			if (typeof options.expires === 'number'){
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }
			value = String(value);
			return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }
		options = value || {};
        var decode = options.raw ? function(s){ return s; } : decodeURIComponent;
		var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++){
            if (decode(pair[0]) === key) return decode(pair[1] || '');
        }
        return null;
    };
})(jQuery, document, window);