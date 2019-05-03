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
				debugger;
		});

return false;
debugger;

		$.ajax({
      type: 'POST',
      url: url,
			data: JSON.stringify(this.data),
      processData: true,
      contentType: 'application/json',
			dataType: 'json'
      }).done(( data ) => {
				debugger;
				return data;
		});

	}


}
