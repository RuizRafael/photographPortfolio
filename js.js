
/**********************************************************************************
		READY STATE
***********************************************************************************/

document.addEventListener("readystatechange", eventController);
function eventController() {
	if ( document.readyState == "interactive" ) {

		loadingOut();

	}
}

function loadingOut() {
	setTimeout(function () {
		document.getElementsByClassName('square')[1].style.height = "0";
		document.getElementsByClassName('square')[1].style.width = "0";
		setTimeout(function () {
			document.getElementsByClassName('square')[1].style.border = "1px solid black";
		}, 200);
	}, 1500);
	setTimeout(function () {
		document.getElementsByClassName('square')[0].style.height = "3000px";
		document.getElementsByClassName('square')[0].style.width = "3000px";
		setTimeout(function () {
			document.getElementsByClassName('square')[0].style.border = "1px solid black";
		}, 75);
	}, 2300);
	setTimeout(function () {
		document.getElementById('loading').style.top = "-110%";
	}, 2500);
}