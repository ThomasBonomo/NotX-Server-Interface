function setFullscreen()
{
	document.documentElement.requestFullscreen();
}

function toggleStart()
{
	var start = document.getElementById("start");
	
	if (start.style.visibility === "hidden")
		return start.style.visibility = "visible";
	start.style.visibility = "hidden";
}
