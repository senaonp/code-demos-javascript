// pixelcanvas.js

var activecolor = "rgb(0,0,0)"
var mousedown = 0;

function initializecanvas() {
	var square = "<td onmousedown='pixmousedown(this)' onmouseover='pixmouseover(this)' onmouseup='pixmouseup(this)' draggable='false' ondragstart='return false;'></td>";
	var ri = "<tr draggable='false'>", re = "</tr>";
	var cols = 40, rows = 30;
	
	var canvas = "<table id='pixtable' draggable='false'>";
	for (a=0; a<rows; a++) {
		canvas += ri;
		for (b=0; b<cols; b++) {
			canvas += square;
		}
		canvas += re;
	}
	canvas += "</table>";
	document.getElementById("pixcanvas").innerHTML = canvas;
}

function initializepalette() {
	var palette = "";
	var colors = 20, color = 255;
	for (c=0; c<colors; c++) {
		var rgb1 = color, rgb2 = color, rgb3 = color;
		color -= Math.floor(255/colors);
		palettediv="<div class='pixcolor' onmousedown='setcolor(this)' id='pix"+c+"' style='background-color:rgb("+rgb1.toString()+","+rgb2.toString()+","+rgb3.toString()+")'></div>";
		palette += palettediv;
	}
	document.getElementById("pixcolors").innerHTML = palette;
}

function pixmousedown(elem) {
	mousedown = 1;
	elem.style.backgroundColor = activecolor;
	return false;
}

function pixmouseup(elem) { mousedown = 0; }

function pixmouseover(elem) {
	if (mousedown == 1) { elem.style.backgroundColor = activecolor; }
	else { return 0; }
}

function setcolor(s) {
	document.getElementById("pixactive").style.backgroundColor = s.style.backgroundColor;
	activecolor = s.style.backgroundColor;
}

function resetcanvas() {
	a = document.querySelectorAll("#pixtable td");
	for (b=0; b<a.length; b++) { a[b].style.backgroundColor = "rgb(255,255,255)"; }
}

initializepalette();
initializecanvas();