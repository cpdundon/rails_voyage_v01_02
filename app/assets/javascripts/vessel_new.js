class VesselNew {

	constructor (data) {
		this.data = data;
	}

	submit (url) {
		$.post("/vessels", this.data)
			.done( data => {
				const newID = data.id;
				const vesselShow = new VesselShow();
				const url = window.location.origin + '/vessels/' + newID;
				vesselShow.populate(url);
		});

		return false;
	}

}
