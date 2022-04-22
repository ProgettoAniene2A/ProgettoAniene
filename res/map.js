function setAndFindG() {
	image = document.getElementById("intMapImg");
	scrWidth = window.screen.availWidth;
	
	image.width = scrWidth * 0.9;
	image.minWidth = "500px";
	imgWidth = scrWidth * 0.9;
	oriWidth = 1833;
	
	dif = imgWidth / oriWidth;
	
	return dif
};

function loadMap() {
	let g = setAndFindG();
	console.log(g);
	
	map = document.getElementById("intMap");
	//areas = document.getElementsByClassName("areas");
	
	areas = [
		[ "rect", [870 * g, 380 * g, 990 * g, 450 * g], "../index.html" ]
	]
	
	for ( let i = 0; i < areas.length; i++ ) {
		let area = document.createElement("area");
		area.shape = areas[i][0];
		area.coords = areas[i][1];
		area.href = areas[i][2];
		map.append( area );
	}
}