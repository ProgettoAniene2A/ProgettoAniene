function setAndFindG() {
	image = document.getElementById("intMapImg");
	imgHeight = window.screen.availHeight * 0.85;
	
	image.height = imgHeight;
	oriHeight = 973;
	
	dif = imgHeight / oriHeight;
	
	return dif;
};

function loadMap() {
	g = setAndFindG();
	console.log(g);
	
	map = document.getElementById("intMap");
	//areas = document.getElementsByClassName("areas");
	
	areas = [
		[ "circ", [352 * g, 469 * g, 14 * g], "../index.html" ]
	]
	
	for ( let i = 0; i < areas.length; i++ ) {
		let area = document.createElement("area");
		area.shape = areas[i][0];
		area.coords = areas[i][1];
		area.href = areas[i][2];
		map.append( area );
	}
}