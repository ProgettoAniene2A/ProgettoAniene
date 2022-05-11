function scroll() {
	div = document.getElementById( "mobile" );
	rawScrollLev = document.body.scrollTop || document.documentElement.scrollTop;
	scrH = screen.availHeight;
	
	// apply some margin
	scrollLev = rawScrollLev + ( scrH * 0.4 );
	
	if ( scrollLev <= scrH ) {
		div.className = "scroll1";
	} else if ( scrollLev > scrH && scrollLev <= scrH * 2 ) {
		div.className = "scroll2";
	}
	
	console.log( scrH, scrollLev );
}

window.onscroll = function(){ scroll() };