function scroll() {
	div = document.getElementById( "mobile" );
	rawScrollLev = document.body.scrollTop || document.documentElement.scrollTop;
	scrH = window.innerHeight;
	
	// apply some margin to get it in (almost) middle of screen (moreless halfway) and not top
	scrollLev = rawScrollLev + scrH * 0.35;
	
	braccio1 = document.getElementById( "mobFbozz" );
	birdw2 = document.getElementById( "mobFbird" );
	maglie3 = document.getElementById( "mobFmaglie" );
	diseg3 = document.getElementById( "mobFdis" );
	logo3 = document.getElementById( "mobFlogo" );
	pic1 = document.getElementById( "mobFp1" );
	pic2 = document.getElementById( "mobFp2" );
	pic3 = document.getElementById( "mobFp3" );
	pic4 = document.getElementById( "mobFp4" );
	
	if ( scrollLev <= scrH ) {
		div.className = "scroll0";
		// hide all
		braccio1.className = "mobHidden";
		birdw2.className = "mobHidden";
		maglie3.className = "mobHidden";
		diseg3.className = "mobHidden";
		logo3.className = "mobHidden";
		pic1.className = "mobHidden";
		pic2.className = "mobHidden";
		pic3.className = "mobHidden";
		pic4.className = "mobHidden";
	} else if ( scrollLev > scrH && scrollLev <= scrH * 2 ) {
		div.className = "scroll1";
		// visualize 1
		braccio1.className = "mobVisualized";
		// hide 2
		birdw2.className = "mobHidden";
	} else if ( scrollLev > scrH * 2 && scrollLev <= scrH * 3 ) {
		div.className = "scroll2";
		// visualize 2
		birdw2.className = "mobVisualized";
		// hide 1 & 3
		braccio1.className = "mobHidden";
		maglie3.className = "mobHidden";
		diseg3.className = "mobHidden";
		logo3.className = "mobHidden";
	} else if ( scrollLev > scrH * 3 && scrollLev <= scrH * 4 ) {
		div.className = "scroll3";
		// visualize 3
		maglie3.className = "mobVisualized";
		diseg3.className = "mobVisualized";
		logo3.className = "mobVisualized";
		// hide 2 % 4
		birdw2.className = "mobHidden";
		pic1.className = "mobHidden";
		pic2.className = "mobHidden";
		pic3.className = "mobHidden";
		pic4.className = "mobHidden";
	} else if ( scrollLev > scrH * 4 && scrollLev <= scrH * 5 ) {
		div.className = "scroll4";
		// visualize 4
		pic1.className = "mobVisualized";
		pic2.className = "mobVisualized";
		pic3.className = "mobVisualized";
		pic4.className = "mobVisualized";
		// hide 3
		maglie3.className = "mobHidden";
		diseg3.className = "mobHidden";
		logo3.className = "mobHidden";
	} else if ( scrollLev > scrH * 5 ) {
		div.className = "scrollL";
	}
}

window.onscroll = function(){ scroll() };