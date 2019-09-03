var calculate = function () {
	console.log("hello world!");

	var A = $("#inputA").val();
	var B = $("#inputB").val();
	var C = $("#inputC").val();
	var D = $("#inputD").val();
	var E = $("#inputE").val();
	var F = $("#inputF").val();
	var G = $("#inputG").val();
	var H = $("#inputH").val();
	var I = $("#inputI").val();
	var J = $("#inputJ").val();

	var MPF = C - (485.00 * 52);
	var BFR = D - (250.00 * 52);
	var LT = ( A * (1 - ( J/100 )) / G ) / 100 * I;
	var EX = B * (E/100);
	var SC = B * ( F/100 );
	var CF = B/G;
	var ITR = B - (EX + SC);


	var TOTAL_SAVINGS = MPF + BFR + LT + EX + SC + ITR;

	$("#outputMPF").val(MPF);
	$("#outputBFR").val(BFR);
	$("#outputLT").val(LT);
	$("#outputITR").val(ITR);
	$("#outputEX").val(EX);
	$("#outputSC").val(SC);
	$("#outputCF").val(Math.round(parseFloat(CF) * 100) / 100);
	$("#outputTOTAL_SAVINGS").val(Math.round(parseFloat(TOTAL_SAVINGS) * 100) / 100);
}
