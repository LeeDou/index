function getHost(){
	var host = "null";
	if (typeof url == "undefined" || url == null ) {
		url = window.location.herf;
	}
	var regex = /^\w+\:\/\/([^\/*]).*/g;
	var match1 = url.match(regex);
	if (typeof match1 != "undefined" && null != match1) {
		host = match1[1];
	}
	return host;
}