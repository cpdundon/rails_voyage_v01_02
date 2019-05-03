class VesselIndex {
	constructor () {}

	href () {
		return window.location.href;
	}

	hrefJson () {
		return this.href() + '.json';
	}

	isVesselIndexPage (url = "") {
		let hrefSplit = [];

		if (url === "") {
			hrefSplit = this.href().split('/');
		} else {
			hrefSplit = url.split('/');
		}

		return hrefSplit[hrefSplit.length - 1] === "vessels" && hrefSplit.length === 4;
	}

	addStructure (vesselList) {
		const structureStr = `<h1>Vessel Index</h1>
			<a href="/vessels/new">New Vessel</a>
			<ol id="vessel_list">${vesselList}
			</ol>`;

		return structureStr;
	}

	populate (url = "") {
		if (url === "") {
			url = this.href();
		}

		url += '.json';

		$.ajax({
			type: 'GET',
			url: url,
			processData: true,
			contentType: 'application/json',
			}).done(( data ) => {
				const vesselHTML = this.vesselList(data);
				$('#jquery_hook')[0].innerHTML = this.addStructure(vesselHTML);
		});
	}
	
	vesselList (vessels) {
		return vessels.map((el) => {return this.oneVessel(el);}).join("");
	}

	oneVessel (dataLineItm) {
		return `<li> - <a class="show" href="/vessels/${dataLineItm.id}">${dataLineItm.name}</a></li>`;
	}

}
