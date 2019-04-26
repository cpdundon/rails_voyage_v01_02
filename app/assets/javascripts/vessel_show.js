class VesselShow {
	constructor () {
		this.busy = false;
	}


	href () {
		return window.location.href;
	}

	id () {
		let urlSplit = this.href().split('/');
		let idStr = urlSplit[urlSplit.length - 1];

		if (Number.isInteger(parseInt(idStr))) {
			return idStr;
		}
		return "";
	}

	hrefJson () {
		return this.href() + '.json';
	}

	isVesselShowPage () {
		const hrefSplit = this.href().split('/');	
		return this.id() !== "" && hrefSplit[hrefSplit.length - 2] === "vessels" && hrefSplit.length === 5;
	}

	populate () {
		$.ajax({
			type: 'GET',
			url: this.hrefJson(),
			processData: true,
			contentType: 'application/json',
			}).done(( data ) => {
				$('#vessel_name')[0].innerText = data.name;				
				const activeText = data.active ? 'Yes' : 'No';
				$('#vessel_active')[0].innerText = activeText; 
				const voyageHTML = this.voyageList(data.voyages);
				$('#vessel_voyages')[0].innerHTML = voyageHTML;
		});
	}
	
	voyageList (voyages) {
		voyages.sort(function(a, b) {return new Date(b.voyage_date) - new Date(a.voyage_date);});
		return voyages.map((el) => {return this.oneVoyage(el);}).join("");
	}

	oneVoyage (dataLineItm) {
		return '<li> - ' + dataLineItm.voyage_date + ' - ' + dataLineItm.skipper.name + '</li>';
	}

}
