//Code for the Vessel Show Page
$(document).ready(function () {
//	let game = new Game(-1);
//	game.attachListeners();

	let urlSplit = window.location.href.split('/'); 
	$('#vessel_name')[0].innerText = "ID => " + urlSplit[urlSplit.length - 1];

	let jsonUrl = window.location.href + '.json';

	console.log(jsonUrl);
});

class VesselShow {
	constructor () {
	}

	href () {
		return window.location.href;
	}

	id () {
		let urlSplit = this.href().split('/');
		let id = urlSplit[urlSplit.length - 1];

		if Number.isInteger(parseInt(id)) {
			return id;
		}
		return "";
	}

	hrefJson () {
		return this.href() + '.json';
	}

	isVesselShowPage () {
		const hrefSplit = this.href().split('/');	
		return this.id() !== "" && hrefSplit[hrefSplit.length - 2] === "vessels";
	}

	attachListeners () {
		
	}

}
