function move( url ) {
	window.location.href = url;
}

// find 1em
/*
function getSize(size = '1em', parent = document.body) {
    let l = document.createElement('div')
    l.style.visibility = 'hidden'
    l.style.boxSize = 'content-box'
    l.style.position = 'absolute'
    l.style.maxHeight = 'none'
    l.style.height = size
    parent.appendChild(l)
    size = l.clientHeight
    l.remove()
    return size
}

// set grid content vertically centered
function gridCentring() {
	gridEls = document.getElementsByClassName("internalGrid");
	for ( let i = 0; i < gridEls.length; i++ ) {
		gridEl = gridEls[i];
		gridContents = document.getElementsByClassName("gridContent");
		gridContent = gridContents[i];
		
		totHeight = gridEl.clientHeight;
		contHeight = 1.4 * getSize;
		marg = (totHeight - contHeight) / 2;
		console.log(marg);
		
		gridContent.marginTop = marg;
	}
}
*/