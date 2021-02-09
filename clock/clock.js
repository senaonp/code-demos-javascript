var date = new Date();

// initialize a clock
var clock = document.getElementById("time");
setTime(clock, date);
startClock(clock);

function setTime(c, d) {
	c.innerText =  formatNum(d.getHours()) + ":" +  formatNum(d.getMinutes()) + ":" + formatNum(d.getSeconds());
};

// add leading zero when number is single-digit
function formatNum(n) {
	if (n<10) { return '0'+n.toString() };
	return n;
};

function startClock(c) {
	setInterval(function() {
		d = new Date();
		setTime(c, d);
	}, 500)
};