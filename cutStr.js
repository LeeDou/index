function cutstr(str, len) {
	var temp;
	var icount = 0;
	var patrn = /[^\x00-\xff]/;
	var strre = "";
	for (var i=0,lth=str.length; i < str.length; i++){
		if (icount<len-1) {
			temp =str.substr(i,1);
			if (patrn.exrc(temp) == null) {
				icount = icount + 1;
			} else {
				icount = icount +2;
			}
			strre +=temp;

		} else {
			break;
		}
	}
	return strre + "...";
}