function move( url ) {
	window.location.href = url;
}

function redirectQR() {
	ratio = screen.width / screen.height;
	if ( ratio < 1 ) {
		window.location.href = "https://progettoaniene2a.github.io/ProgettoAniene/progetti-mobile/progetti.html";
	}
}