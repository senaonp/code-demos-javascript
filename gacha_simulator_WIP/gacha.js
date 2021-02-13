gacha_results_04 = "";
gacha_results_59 = "";
gacha_results = "";
for (a=1; a<11; a++) {
	if (a<6) {
		gacha_results_04 += `<td class="gacha_result" id="result_${a}">result ${a}</td>`;
	} else {
		gacha_results_59 += `<td class="gacha_result" id="result_${a}">result ${a}</td>`
	}
}
document.getElementById("pulls04").innerHTML = gacha_results_04;
document.getElementById("pulls59").innerHTML = gacha_results_59;

function pull(num) {
	if (num == 10) {
		for (a=1; a<11; a+=1) {
			document.getElementById("result_"+a).innerHTML = calc_pull();
		}
	} else {
		for (a=1; a<11; a+=1) {
			if (a==1) { document.getElementById("result_1").innerHTML = calc_pull(); }
			else { document.getElementById("result_"+a).innerHTML = ""; }
		}
	}
}

function calc_pull() {
	return Math.floor(Math.random() * Math.floor(100));
};