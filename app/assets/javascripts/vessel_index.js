class VesselIndex {
	constructor () {
		this.busy = false;
	}


	href () {
		return window.location.href;
	}

	hrefJson () {
		return this.href() + '.json';
	}

	isVesselIndexPage () {
		const hrefSplit = this.href().split('/');	
		return hrefSplit[hrefSplit.length - 1] === "vessels" && hrefSplit.length === 4;
	}

	populate () {
		$.ajax({
			type: 'GET',
			url: this.hrefJson(),
			processData: true,
			contentType: 'application/json',
			}).done(( data ) => {
				console.log(data);
				const vesselHTML = this.vesselList(data);
				$('#vessel_list')[0].innerHTML = vesselHTML;
		});
	}
	
	vesselList (vessels) {
		return vessels.map((el) => {return this.oneVessel(el);}).join("");
	}

	oneVessel (dataLineItm) {
		return '<li> - ' + dataLineItm.name + '</li>';
	}

}
