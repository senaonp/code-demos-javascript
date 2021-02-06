// Author: Francis Bacarisas
// Last Updated: 04/01/20
// 
// Notes: N/A

var swTime = 0;
var swSession;
var swH = 0;
var swM = 0;
var swS = 0;
var swMS = 0;
var swString = '';
var swHours = 0;
var swMinutes = 0;
var swSeconds = 0;
var swTimes = [];

function swStart() {
	swSession = setInterval(swRun,20);
	swButtonDisplay({"swStart":"none", "swRecord":"inline-block", "swPause":"inline-block", "swRestart":"none"});
}

function swRun() {
    swTime += 20; document.getElementById("swTime").innerHTML = swDisplay();
    return
}

function swDisplay() {
    swH = Math.floor(swTime / (1000*60*60));
	swM = Math.floor((swTime/(1000*60*60) - swH) * 60);
	swS = Math.floor((((swTime/(1000*60*60)-swH)*60)-swM)*60);
	swMS = Math.floor(((((swTime/(1000*60*60)-swH)*60)-swM)*60 - swS)*1000).toString();
	// makes display friendlier for milliseconds by ensuring a two digit display (e.g. display 00 instead of 0)
	if (swMS.length > 2) {
		swMS = swMS.substring(0,2);
	} else {
		swMS = '0' + swMS.substring(0,1);
	}
	swString = swH + " : " + swM + " : " + swS + " : " + swMS;
	return  swString;
}

function swPause() {
	clearInterval(swSession);
	swButtonDisplay({"swStart":"inline-block", "swRecord":"inline-block", "swPause":"none", "swRestart":"inline-block"})
}

function swRestart() {
	swPause();
    swTime = 0;
    swTimes = [];
    document.getElementById("swTimePoints").innerHTML = '';
    document.getElementById("swTime").innerHTML = "0 : 0 : 0 : 0";
	swButtonDisplay({"swStart":"inline-block", "swRecord":"none", "swPause":"none", "swRestart":"none"});
}

function swRecord() {
	swTimes.push(swDisplay());
	swTimePoints = "<table border='1' id='swTimePoints'><caption>time points</caption>";
	a = 0;
	swTimes.forEach(function(time) { 
        a += 1; 
		swTimePoints += "<tr><td class='swTimeCount'>" + a + "</td><td>" + time + "</td></tr>";
    });
	document.getElementById("swTimePoints").innerHTML = swTimePoints + "</table>";
}

function swButtonDisplay(a) {
	document.getElementById("swStartBtn").style.display = a.swStart;
	document.getElementById("swRecordBtn").style.display = a.swRecord;
	document.getElementById("swPauseBtn").style.display = a.swPause;
	document.getElementById("swRestartBtn").style.display = a.swRestart;
}

swButtonDisplay({
    "swStart":"inline-block", "swRecord":"none", "swPause":"none", "swRestart":"none"
}) 

document.getElementById("swTime").innerHTML = "0 : 0 : 0 : 0";