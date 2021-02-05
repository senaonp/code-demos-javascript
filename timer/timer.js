// timer.js

var timerTime = 0;
var timerSession;
var timerH = 0;
var timerM = 0;
var timerS = 0;
var timerMS = 0;
var timerString = '';
var timerHours = 0;
var timerMinutes = 0;
var timerSeconds = 0;

function timerStart() {
	timerIniVal();
	timerTime = (parseInt(timerHours)*3600+parseInt(timerMinutes)*60+parseInt(timerSeconds))*1000;
	timerActive();
	document.getElementById('timerNotice').innerHTML = '';
	timerButtonDisplay({"startBtn":"none", "stopBtn":"inline-block", "resumeBtn":"none", "restartBtn":"none"});
}

function timerActive() {
	timerSession = setInterval(timerRun,20);
	timerButtonDisplay({"startBtn":"none", "stopBtn":"inline-block", "resumeBtn":"none", "restartBtn":"none"});
}

function timerRun() {
	timerTime -= 20;
	document.getElementById("timerTime").innerHTML = timerDisplay();
	if (timerTime <= 0) {
		timerFinish();
	}
	return
}

function timerDisplay() {
	timerH = Math.floor(timerTime / (1000*60*60));
	timerM = Math.floor((timerTime/(1000*60*60) - timerH) * 60);
	timerS = Math.floor((((timerTime/(1000*60*60)-timerH)*60)-timerM)*60);
	timerMS = Math.floor(((((timerTime/(1000*60*60)-timerH)*60)-timerM)*60 - timerS)*1000).toString();
	if (timerMS.length > 2) {
		timerMS = timerMS.substring(0,2);
	} else {
		timerMS = '0' + timerMS.substring(0,1);
	}
	timerString = timerH + " : " + timerM + " : " + timerS + " : " + timerMS;
	return  timerString;
}

function timerStop() {
	clearInterval(timerSession);
	timerButtonDisplay({"startBtn":"none", "stopBtn":"none", "resumeBtn":"inline-block", "restartBtn":"inline-block"});
}

function timerRestart() {
	timerStop();
	timerStart();
}

function timerFinish() {
	clearInterval(timerSession);
	timerButtonDisplay({"startBtn":"inline-block", "stopBtn":"none", "resumeBtn":"none", "restartBtn":"none"});
	document.getElementById('timerNotice').innerHTML = 'the timer has completed';
	if (timerTime <= 0) {
        document.getElementById("timerTime").innerHTML = "0 : 0 : 0 : 0";
    }
    setTimeout(function() {alert('timer has completed')}, 50);
}

function timerIniVal() {
	if (document.getElementById("timerHour").value == "") { timerHours = 0; } else {
		timerHours = document.getElementById("timerHour").value;
	}
	if (document.getElementById("timerMinute").value == "") { timerMinutes = 0; } else { 
        timerMinutes = document.getElementById("timerMinute").value;
	}
	if (document.getElementById("timerSecond").value == "") { timerSeconds = 0; } else {
		timerSeconds = document.getElementById("timerSecond").value;
	}
}

function timerButtonDisplay(a) {
	document.getElementById("startTimer").style.display = a.startBtn;
	document.getElementById("stopTimer").style.display = a.stopBtn;
	document.getElementById("resumeTimer").style.display = a.resumeBtn;
	document.getElementById("restartTimer").style.display = a.restartBtn;
}

timerButtonDisplay({"startBtn":"inline-block", "stopBtn":"none", "resumeBtn":"none", "restartBtn":"none"})
