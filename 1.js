var a=30;
switch(true){
	case a<18:document.write("<b>Child</b>");
		break;
	case a>=18 && a<=45: document.write("<b>Adult</b>");
		break;
	case a>=45 && a<=90: document.write("<b>Older</b>");
		break;
	default: document.write("<b><i>Invalid Input</i></b>");
}




