$( document ).ready(function() {

function generateRandomNum(low,high) {
	return Math.floor((Math.random() * (high-low+1)) + low);
}
var randomNumber = generateRandomNum(19,119);
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystal1 = generateRandomNum(1,11);
var crystal2 = generateRandomNum(1,11);
var crystal3 = generateRandomNum(1,11);
var crystal4 = generateRandomNum(1,11);

//Initial Display of Random Number and Total Score//
	$("#randomNumber") .html(randomNumber);
	$("#totalScore") .html(totalScore);

function crystalClick(crystalValue) {
	totalScore = totalScore + crystalValue;
		$("#totalScore") .html(totalScore);
		winLose();
}
function winLose() {
	if (totalScore === randomNumber) {
		$("#gameResult") .html("You Win!");
		wins = wins + 1;
		$("#wins") .html(wins);
		$("#reset") .html("- Reset Game -");

		$("#crystal1") .off();
		$("#crystal2") .off();
		$("#crystal3") .off();
		$("#crystal4") .off();
	}

	if (totalScore > randomNumber) {
		$("#gameResult") .html("You Lose.");
		losses = losses + 1;
		$("#losses") .html(losses);
		$("#reset") .html("- Reset Game -");

		$("#crystal1") .off();
		$("#crystal2") .off();
		$("#crystal3") .off();
		$("#crystal4") .off();
	}

}

function reset() {
	totalScore = 0;
	randomNumber = generateRandomNum(19,119);
	crystal1 = generateRandomNum(1,11);
	crystal2 = generateRandomNum(1,11);
	crystal3 = generateRandomNum(1,11);
	crystal4 = generateRandomNum(1,11);
	$("#gameResult") .html("");
	$("#randomNumber") .html(randomNumber);
	$("#totalScore") .html(totalScore);

	$("#crystal1") .on("click", function() {
		crystalClick(crystal1) });
	$("#crystal2") .on("click", function() {
		crystalClick(crystal2) });
	$("#crystal3") .on("click", function() {
		crystalClick(crystal3) });
	$("#crystal4") .on("click", function() {
		crystalClick(crystal4) });

	$("#reset") .html("");
}

	
//------------Crystals 1 thru 4-------------//
	$("#crystal1") .on("click", function() {
		crystalClick(crystal1) });
	$("#crystal2") .on("click", function() {
		crystalClick(crystal2) });
	$("#crystal3") .on("click", function() {
		crystalClick(crystal3) });
	$("#crystal4") .on("click", function() {
		crystalClick(crystal4) });
//---------------Reset Game-----------------//
	$("#reset") .on("click", function() {
		reset() });
}); //document.ready//