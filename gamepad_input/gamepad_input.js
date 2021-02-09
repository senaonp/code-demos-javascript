var inputsList = [];
var activeInput = "";
var refreshRate = 50; // 20 aps
var buttonPress = "";
var activeButtons = [];
var mygamepadButtons = [];
var gamepadStatus = document.getElementById("gamepadStatus");
var activeInputElem = document.getElementById("activeInput");
var inputsListElem = document.getElementById("inputSequence");
var buttonMapping = {'0':'🞩', '1':'○', '2':'□', '3':'△', '4':'L1', '5':'R1', '6':'L2', '7':'R2', '8':'i', '9':'j', '10':'k', '11':'l', '12':'⇧', '13':'⇩', '14':'⇦', '15':'⇨', '16':'q', '17':'r', '18':'s',}

window.addEventListener("gamepadconnected", function(e) {
	var mygamepad = e.gamepad;
	setInterval(setInput, refreshRate);
	gamepadStatus.innerText = "ON";
});

window.addEventListener("gamepaddisconnected", function(e) {
	gamepadStatus.innerText = "OFF";
});

function setInput() {
	input = getButtonState();
	console.log(input);
	if (input.length != 0) {
		inputsList.push("["+input+"]");
	};
	inputsListElem.innerText = inputsList.join(' - ');
	if (inputsList.length > 200) { inputsList = [] }
}

function getButtonState() {
	mygamepad = navigator.getGamepads()[0];
	activeButtons = [];
	mygamepad.buttons.forEach(function(button, index, array) {
		if (button.pressed) {
			activeButtons.push(index);
		}
	});
	activeButtons = mapButtons(activeButtons);
	activeInputElem.innerText = activeButtons.join("");
	return activeButtons;
}

function mapButtons(a) {
	var b = [];
	a.forEach(function(c) {
		b.push(buttonMapping[c]);
	});
	return b;
}