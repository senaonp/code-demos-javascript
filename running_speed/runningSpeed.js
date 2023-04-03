var distRatio = 1.6093;
var state = {
	"units": "km",
	"min": 0,
	"sec": 0,
	"dist": 0
};
var result = {
	"km": 0,
	"mi": 0,
};

// DOM elements

miModeElem = document.getElementById("miMode");
kmModeElem = document.getElementById("kmMode");
distLabelElem = document.getElementById("distLabel");
resultDetailElem = document.getElementById("resultDetail");
kmResultElem = document.getElementById("kmResult");
miResultElem = document.getElementById("miResult");
resultsElem = document.getElementById("results");

// initialize state

kmModeElem.checked = true;
miModeElem.checked = false;
distLabelElem.innerText = "distance (km)";

// applet

function setMode(mode) {
	state["units"] = mode;
	if (mode == "km") {
		miModeElem.checked = false;
	} else {
		kmModeElem.checked = false;
	}
	distLabelElem.innerText = "distance (" + mode + ")";
	calc();
}

function setValue(elem, attr) {
	state[attr] = parseFloat(elem.value);
	calc();
}

function parseSecForm(min, sec) {
	return [min*60+sec];
}

function parseMinForm(sec) {
	return [Math.floor(sec/60), Math.floor(sec%60)];
}

function runningRateSecForm(sec) {
	if (sec < 10) {
		return "0"+sec.toString();
	}
	return sec;
}
function calc() {
	var setRate = parseMinForm(parseSecForm(state["min"], state["sec"])[0]/state["dist"]);
	if (isNaN(setRate[0]) || isNaN(setRate[1])) { return };
	if (state["units"] == "km") {
		result["km"] = setRate;
		result["mi"] = parseMinForm(parseSecForm(state["min"]*distRatio, state["sec"]*distRatio)[0]/state["dist"]);
	} else {
		result["km"] = parseMinForm(parseSecForm(state["min"]/distRatio, state["sec"]/distRatio)[0]/state["dist"]);
		result["mi"] = setRate;
	}
	resultDetailElem.innerText = "the running speed for a distance of " + state["dist"] + " " + state["units"] + " in " + state["min"] + ":" + runningRateSecForm(state["sec"]) + " minutes is";
	kmResultElem.innerText = result["km"][0] + ":" + runningRateSecForm(result["km"][1]) + " min/km";
	miResultElem.innerText = result["mi"][0] + ":" + runningRateSecForm(result["mi"][1]) + " min/mi";
	resultsElem.style.display = "block";
}
