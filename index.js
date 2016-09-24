//Array of arrays with planet name and gravity values
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

//Wraps entire jQuery to make sure no DOM manipulation is done until the DOM is rendered
$(document).ready(function(){

  //Click function that calculates how much you weigh on a specific planet, based on: 1) The weight entered and 2) The surface gravity of the selected planet
  $("#calculate-button").click(function() {
      var planetSelected = $("#planet option:selected").text(); //gets name of selected planet
      var weightOnPlanet = $("#planet").val() * $("#weight").val(); //calculates how much the user weighs on the planet selected
      $("#result").text("If you were on " + planetSelected + " you would weigh " + weightOnPlanet + "lbs"); //displays message to user telling them how much they weigh on the planet they selected
  });

  //Loops through planets array, then constructs option elements that are prepended to the select element with ID of planet
  $.each(planets, function(i) {
      $("<option>").val(planets[i][1]).html(planets[i][0]).prependTo("#planet"); 
  });

  //Sorts planets array in ascending order of gravity
  planets.sort(function(a,b){
      return a[1] - b[1]; 
  });

  //Dynamically creates the planet-table HTML structure and populates the rows within the table with the data within the planets array of arrays
  $.each(planets, function(i) {
      if (i === 0){
        $("#planets-table").append("<thead><tr><th>Planet Name</th><th>Multiple of Earth Gravity</th></tr></thead><tbody></tbody>").addClass("table table-striped table-bordered");
      }       
      $("#planets-table tbody").append("<tr><td>" + planets[i][0] + "</td><td>" + planets[i][1] + "</td></tr>");
  })
});