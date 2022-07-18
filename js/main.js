/* Global Variables */
mX = 0;
mY = 0;
iX = 0;
iY = 0;
mD = false;
cW = {};

/* Pre-declared Events */
document.onload = () => {
	start = document.getElementById("start");
	dwm   = document.getElementById("dwm");
}

document.onmousemove = () => {
	mX = window.event.x;
	mY = window.event.y;
	
	if (mD === true && cW.classList[0] === "desktop-window") {
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
	
	if (cW.id !== "start" && start.style.visibility === "visible")
		closeStart();
}

/* Function Declarations */
function setFullscreen() {
	document.documentElement.requestFullscreen();
}

function openStart() {
	start.style.visibility = "visible";
}

function closeStart() {
	start.style.visibility = "hidden";
}

function toggleStart() {
	if (start.style.visibility === "hidden")
		return openStart();
	closeStart();
}

/* Program Windows */
function openWindow() {
	dwm.innerHTML += "<div class="desktop-window"></div>";
}
