function cutstr(str, len) {
	var temp;
	var icount = 0;
	var patrn = /[^\x00-\xff]/;
	var strre = "";
	for (var i=0,lth=str.length; i < lth ; i++){
		if (icount<len) {
			temp =str.substr(i,1);
			if (patrn.exec(temp) == null) {
				icount = icount + 1;
			} else {
				icount = icount +2;
			}
			strre +=temp;

		} else {
			break;
		}
	}
	return strre + "," +icount + "...";
}