
$(document).ready(function () {
	let vesselShow;
	let vesselIndex;
	
	if (vesselShow === undefined) { vesselShow = new VesselShow(); }
	if (vesselIndex === undefined) { vesselIndex = new VesselIndex(); }

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

});

