/* Global Variables */
mX = 0;
mY = 0;
iX = 0;
iY = 0;
mD = false;
cW = {};

/* Pre-declared Events */
document.onmousemove = () => {
	mX = window.event.x;
	mY = window.event.y;
	
	if (mD === true && cW.classList[0] === "temp") {
		cW.style.marginLeft = mX - iX + "px";
		cW.style.marginTop  = mY - iY + "px";
	}
}

document.onmousedown = () => {
	cW = window.event.target;
	iX = window.event.x - (cW.style.marginLeft.replace("px", "") / 1);
	iY = window.event.y - (cW.style.marginTop.replace("px", "") / 1);
	mD = true;
}

document.onmouseup = () => {
	mD = false;
}

/* Function Declarations */
function setFullscreen() {
	document.documentElement.requestFullscreen();
}

function toggleStart() {
	var start = document.getElementById("start");
	
	if (start.style.visibility === "hidden")
		return start.style.visibility = "visible";
	start.style.visibility = "hidden";
}