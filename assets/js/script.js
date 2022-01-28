// Display today's time
var todaysTime = moment().format("dddd, MMMM, Do");
var todaysDisplay = document.getElementById("currentDay");

todaysDisplay.textContent = todaysTime;