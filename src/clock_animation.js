//This is how I would normally get information but I couldn'r get it to work
//I have hard coded a value for a clock in its place.
//stack overflow suggests it is an issue with the server?
//I would have then filtered out the jackpot total and then called setTime on clock
let jackpot= fetch("http://content.iivt.com/feeds/json/PartyCasinoJackpotsGBP.js")
.then(function (response){
  return response.json()
})
.then(function(json) {
  console.log(json)
})
.catch(function(error) {
  console.log(error);
});



var clock;

$(document).ready(function() {

	// Instantiate a counter
	clock = new FlipClock($('.clock'), {
		clockFace: 'Counter',
		autoStart: true
	});
  clock.setTime(152586)
});
