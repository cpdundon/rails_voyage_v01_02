//Code for the Vessel Show Page
$(document).ready(function () {
//	let game = new Game(-1);
//	game.attachListeners();

	let urlSplit = window.location.href.split('/'); 
	$('#vessel_name')[0].innerText = "ID => " + urlSplit[urlSplit.length - 1];

	let jsonUrl = window.location.href + '.json';

	console.log(jsonUrl);
});