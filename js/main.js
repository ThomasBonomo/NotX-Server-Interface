/* Global Variables */
mX = 0;
mY = 0;
iX = 0;
iY = 0;
mD = false;
cT = {};
cW = {};
mZ = 0;

/* Pre-declared Events */
document.onload = () => {
	start = document.getElementById("start");
	dwm   = document.getElementById("dwm");
}

document.onmousemove = () => {
	mX = window.event.x;
	mY = window.event.y;
	
	if (mD === true && cT.classList[0] === "title-bar") {
		cW.style.transform = "translate(" + (mX - iX + "px,") + (mY - iY + "px") + ")";
	}
}

document.onmousedown = () => {
	if (window.event.target.classList[0] === "program-name") {
		//cT = window.event.path[1];
		//cW = window.event.path[2];
		cT = window.event.composedPath()[1];
		cW = window.event.composedPath()[2];
		mZ++;
		cW.style.zIndex = mZ;
	}
	else {
		cT = window.event.target;
		//cW = window.event.path[1];
		cW = window.event.composedPath()[1];
		mZ++;
		cW.style.zIndex = mZ;
	}
	
	if (cW.style.transform === "")
		cW.style.transform = "translate(0, 0)";
	
	iX = window.event.x - (cW.style.transform.match(/\d+/g)[0] / 1);
	iY = window.event.y - (cW.style.transform.match(/\d+/g)[1] / 1);
	
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

function closeWindow()
{
	//window.event.path[2].remove();
	window.event.composedPath()[2].remove();
}

/* Program Windows */
async function openWindow() {
	let response = await fetch("prog/settings", {method: "get"});
	
	if (response.status !== 200)
		throw new Error("Unable to fetch program body.");
	let progBody = await response.text();
	
	dwm.innerHTML += progBody;
}
