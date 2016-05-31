/* ============================== */
/*  DOCUMENT READY
/* ============================== */

$(document).ready(function(){


/* ============================== */
/*  SYNTAX HIGHLIGHTER
/* ============================== */

	SyntaxHighlighter.all();


/* ============================== */
/*  BROWZR JS PREVIEW
/* ============================== */

	$('.preview').click(function(){
		$('body').browzr();
		$('#browzr').fadeIn('fast');
	});


/* ============================== */
/*  DISQUS COMMENTING
/* ============================== */

	var disqus_shortname = 'browzrjs';

	(function() {
    	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    	dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
});