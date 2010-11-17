var image_handler_ready=false;
var gs_data = {
	'player':false
};
function getPlayer() {
	var player = document.getElementById('gsliteswf');
	if(player) {
		gs_data.player=player;
		return true;
	} else {
		return false;
	}
}

chrome.extension.onRequest.addListener(
	function(request, sender, fn_sendResponse) {
		if(!gs_data.player) {
			var foundPlayer = getPlayer();
			if(!foundPlayer) {
			  return false;
			}
		}
		var player = gs_data.player;
		
		switch(request.action) {
			case "playpause":
	  		player.togglePlayback();
	  	break;
	  	case "next":
	  		player.next();
	  	break;
	  	case "previous":
	  		player.previous();
	  	break;
	  }
  }
);