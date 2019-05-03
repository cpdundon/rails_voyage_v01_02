$(document).ready(function () {
	let vesselShow = new VesselShow();
	let vesselIndex = new VesselIndex();
	
	if (vesselShow.isVesselShowPage()) {
		vesselShow.populate(vesselShow.href());
	}
		
	if (vesselIndex.isVesselIndexPage()) {
		vesselIndex.populate();
	}
	
	$(document).on("click", "a", (e) => {
		const url = e.target.href;

		if (vesselIndex.isVesselIndexPage(url)) {
			history.pushState(null, null, url);	
			vesselIndex.populate(url);

		} else if (vesselShow.isVesselShowPage(url)) {
			history.pushState(null, null, url);	
			vesselShow.populate(url);

		} else {
			//do nothing
			return true;
		}
		
		e.preventDefault();
		return false;
	});

	$(document).on('submit', '#vessel_new', e => {
		const formInfo = $(e.target).serialize();
		const url = window.location.origin + '/vessels'
		const newVessel = new VesselNew(formInfo);
		newVessel.submit(url);
		e.preventDefault();
	});

});
