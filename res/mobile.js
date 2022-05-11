function scroll() {
	div = document.getElementById( "mobile" );
	rawScrollLev = document.body.scrollTop || document.documentElement.scrollTop;
	scrH = window.innerHeight;
	
	// apply some margin to get it in (almost) middle of screen (moreless halfway) and not top
	scrollLev = rawScrollLev + scrH * 0.3
	
	if ( scrollLev <= scrH ) {
		div.className = "scroll0";
	} else if ( scrollLev > scrH && scrollLev <= scrH * 2 ) {
		div.className = "scroll1";
	} else if ( scrollLev > scrH * 2 && scrollLev <= scrH * 3 ) {
		div.className = "scroll2";
	} else if ( scrollLev > scrH * 3 && scrollLev <= scrH * 4 ) {
		div.className = "scroll3";
	} else if ( scrollLev > scrH * 4 && scrollLev <= scrH * 5 ) {
		div.className = "scroll4";
	} else if ( scrollLev > scrH * 5 ) {
		div.className = "scrollL";
	}
}

window.onscroll = function(){ scroll() };