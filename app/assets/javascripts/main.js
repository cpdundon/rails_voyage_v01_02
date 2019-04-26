let vesselShow;
let vesselIndex;

$(document).ready(function () {
	if (vesselShow === undefined) { vesselShow = new VesselShow(); }
	if (vesselIndex === undefined) { vesselIndex = new VesselIndex(); }

	if (vesselShow.isVesselShowPage()) {
		vesselShow.populate();
	}
		
	if (vesselIndex.isVesselIndexPage()) {
		vesselIndex.populate();
	}

return false;

	$(document).bind('DOMSubtreeModified', function (e) {
		if (vesselShow.busy) {
			return false;
		} 
		debugger;		
		vesselShow.busy = true;

		if (vesselShow.isVesselShowPage()) {
			vesselShow.populate();
		}
		
		vesselShow.busy = false;	
		return true;
	});

});

