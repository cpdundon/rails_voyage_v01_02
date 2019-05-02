class VesselNew {

	constructor (data) {
		this.data = data;
	}

	submit (url) {
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
