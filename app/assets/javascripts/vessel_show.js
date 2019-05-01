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

	structureStr (vessel) {
		const structure = `<h1>Vessel: ${vessel.name}</h1>
			<p>	Active? -- ${vessel.active ? 'Yes' : 'No'}</p>
			<h2>Voyage by date and skipper:</h2>
			<ol id="vessel_voyages"></ol>
			<div id="navigation_links"></div>`;
		return structure;
	}

	populate () {
		$.ajax({
			type: 'GET',
			url: this.hrefJson(),
			processData: true,
			contentType: 'application/json',
			}).done(( data ) => {
				$('#jquery_hook')[0].innerHTML = this.structureStr(data);				
				const voyageHTML = this.voyageList(data.voyages);
				$('#vessel_voyages')[0].innerHTML = voyageHTML;
				const navigationHTML = this.navLinks();
				$('#navigation_links')[0].innerHTML = navigationHTML;	
		});
	}
	
	voyageList (voyages) {
		voyages.sort(function(a, b) {return new Date(b.voyage_date) - new Date(a.voyage_date);});
		return voyages.map((el) => {return this.oneVoyage(el);}).join("");
	}

	oneVoyage (dataLineItm) {
		return '<li> - ' + dataLineItm.voyage_date + ' - ' + dataLineItm.skipper.name + '</li>';
	}

	navLinks () {
		return `${this.newVesselLink()} | ${this.editVesselLink()} | ${this.listVesselsLink()}`;
	}
	
	listVesselsLink () {
		return this.oneLink("Vessel List", `/vessels`, "index")
	}

	editVesselLink () {
		return this.oneLink("Edit Vessel", `/vessels/${this.id}/edit/`, "edit")
	}

	newVesselLink () {
		return this.oneLink("New Vessel", `/vessels/new/`, "new");
	}

	oneLink(text, href, klass) {
		return `<a href="${href}" class="${klass}">${text}</a>`;
	}
}
