var timer = setInterval(myTimer, 100);
			
function myTimer() {
	var d = new Date();
	document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
