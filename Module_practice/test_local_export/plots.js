// // Sort the cities in descending order of population growth.
// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse();

// // Select only the top five cities in terms of growth.
// var topFiveCities = sortedCities.slice(0,5);

// // Create separate arrays for the city names and their population growths.
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// // Use Plotly to create a BAR chart with these arrays.
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// Select only the top seven cities in terms of growth.
// var topSevenCities = sortedCities.slice(0,7);

// // Create separate arrays for the city names and their population growths.
// var topSevenCityNames = topSevenCities.map(city => city.City);
// var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// // Use Plotly to create a bar chart with these arrays.
// var trace = {
//     x: topSevenCityNames,
//     y: topSevenCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);


// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });


d3.json("samples.json").then(function(data){
    console.log(data);
});