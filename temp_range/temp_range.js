var cState = { "tempMode": "celsius", "fCheck": false, "cCheck": true,  "min": -100, "max": 100, "step": 0.1, };
var fState = { "tempMode": "farenheit", "fCheck": true, "cCheck": false, "min": -100*9/5+32, "max": 100*9/5+32, "step": 0.1, };
var state = cState;

var celsiusMode = document.getElementById("celsius");
var farenheitMode = document.getElementById("farenheit");
var celsiusValue = document.getElementById("celsius_value");
var farenheitValue = document.getElementById("farenheit_value");
var tempRange = document.getElementById("temp_range");
var tempModeElem = document.getElementById("mode");

function setTempMode(type) {
	state = {
		"celsius": cState,
		"farenheit": fState,
	}[type];
	setTempState();
};

function setTempThresholds() {
	document.getElementById('min_val').innerHTML = state["min"];
	document.getElementById('max_val').innerHTML = state["max"];
}

function setTempValue() {
	if (state["tempMode"] === "celsius") {
		celsiusValue.innerHTML = (tempRange.value*1).toFixed(1);
		farenheitValue.innerHTML = (tempRange.value*(9/5)+32).toFixed(1);
	}
	if (state["tempMode"] === "farenheit") {
		celsiusValue.innerHTML = ((tempRange.value-32)*5/9).toFixed(1);
		farenheitValue.innerHTML = (tempRange.value*1).toFixed(1);
	}
}

function setTempState() {
	celsiusMode.checked = state["cCheck"];
	farenheitMode.checked = state["fCheck"];
	tempModeElem.innerHTML = state["tempMode"];
	tempRange.step = state["step"];
	tempRange.min = state["min"];
	tempRange.max = state["max"];
	setTempValue();
	setTempThresholds();
};

// initialize step(s)
setTempState(state);