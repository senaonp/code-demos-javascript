var inputsList = []; // an array of buttons that have been pressed
var activeButtons = []; // an array of all buttons that are pressed at a given time
var mappedButtons = []; // array of pressed buttons after being mapped
var refreshRate = 50; // get state of gamepad 20 times per second
var cleanInputsRate = 3000; // check inputsList every 3 seconds
var maxInputs = 200; // threshold of items to have in inputsList
var gp = {}; // a gamepad object when initialized
var buttonMapping = {'0':'🞩', '1':'○', '2':'□', '3':'△', '4':'L1', '5':'R1', '6':'L2', '7':'R2', '8':'i', '9':'j',
	'10':'k', '11':'l', '12':'⇧', '13':'⇩', '14':'⇦', '15':'⇨', '16':'q', '17':'r', '18':'s',} // button mapping based on Mayflash Arcade Stick controller

var gamepadStatus = document.getElementById("gamepadStatus");
var activeInputElem = document.getElementById("activeInput");
var inputsListElem = document.getElementById("inputSequence");

window.addEventListener("gamepadconnected", function(e) {
	var mygamepad = e.gamepad;
	setInterval(setInput, refreshRate);
	setInterval(clearInputs, cleanInputsRate);
	gamepadStatus.innerText = "ON";
});

window.addEventListener("gamepaddisconnected", function(e) {
	gamepadStatus.innerText = "OFF";
});

function setInput() {
	input = getButtonState();
	if (input.length != 0) {
		inputsList.push("["+input+"]");
		inputsListElem.insertAdjacentText('beforeend', "["+input+"] - ");
	};
}

function getButtonState() {
	gp = navigator.getGamepads()[0];
	activeButtons = [];
	gp.buttons.forEach(function(button, index, array) {
		if (button.pressed) {
			activeButtons.push(index);
		}
	});
	activeButtons = mapButtons(activeButtons);
	activeInputElem.innerText = activeButtons.join("");
	return activeButtons;
}

function mapButtons(btns) {
	mappedButtons = [];
	btns.forEach(function(btn) { mappedButtons.push(buttonMapping[btn]); });
	return mappedButtons;
}

function clearInputs() {
	if (inputsList.length > maxInputs) {
		inputsList = [];
		inputsListElem.innerHTML = "";
	}
}