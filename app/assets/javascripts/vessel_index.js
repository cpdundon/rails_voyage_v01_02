class VesselIndex {
	constructor () {
		this.data = {};
	}

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

	invertVesselList () {
		this.data.forward = this.data.forward ? false : true;
		const vList = this.vesselList();
		$('#vessel_list')[0].innerHTML = vList;
	}

	addStructure (vesselList) {
		const structureStr = `<h1>Vessel Index</h1>
			<a href="/vessels/new">New Vessel</a>
			<button type="button" id="index_invert">Invert List!</button>
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
				this.data.vessels = data
				this.data.forward = true
				const vesselHTML = this.vesselList();
				$('#jquery_hook')[0].innerHTML = this.addStructure(vesselHTML);
		});
	}
	
	vesselList () {
		const forward = this.data.forward
		const compareFn = (a, b) => {
			const mult = forward ? -1 : 1;
			const aU = a.name.toUpperCase();
			const bU = b.name.toUpperCase();

			if (aU < bU) {
				return mult * 1;
			} else if (bU < aU) {
				return mult * -1;
			}
				
			return 0;
		}
		
		const vessels = this.data.vessels
		vessels.sort(compareFn);
		return vessels.map((el) => {return this.oneVessel(el);}).join("");
	}

	oneVessel (dataLineItm) {
		return `<li> - <a class="show" href="/vessels/${dataLineItm.id}">${dataLineItm.name}</a></li>`;
	}

}
