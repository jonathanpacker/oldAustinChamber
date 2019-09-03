var calculate = function () {
	console.log("hello world!")

	var A = $("#inputA").val();
	var B = $("#inputB").val();
	var C = $("#inputC").val();
	var D = $("#inputD").val();
	var E = $("#inputE").val();
	var F = $("#inputF").val();
	var G = $("#inputG").val();
	var H = $("#inputH").val();
	var I = $("#inputI").val();

	var MPF = C - (485.00 * 52);
	var BFR = D - (250.00 * 52);
	var LT = A * (1 - (I * .01)) / F / 100 * H;
	var EX = B * (E * .01);
	var CF = B/F;

	var TOTAL_SAVINGS = MPF + BFR + LT + EX;

	$("#outputMPF").val(MPF);
	$("#outputBFR").val(BFR);
	$("#outputLT").val(Math.round(parseFloat(LT) * 100) / 100);
	$("#outputEX").val(Math.round(parseFloat(EX) * 100) / 100);
	$("#outputCF").val(CF);
	$("#outputTOTAL_SAVINGS").val(Math.round(parseFloat(TOTAL_SAVINGS) * 100) / 100);
}
