
var data = [
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 100, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 50, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"}
];
var player = [
  {"width": 12, "height": 12, "color": "green"},
  ]





var svgContainer = d3.select('body')
.select('.playground')
.append('svg').on("mousemove", function(){

  var pt = d3.mouse(this);
  console.log(pt);
  //reset squares x and y coordinates


})  //on mouse enter svg put the player element where the mouse is

//create initialize function
var circles = svgContainer.selectAll('circle')
.data(data)
.enter()
.append('circle')

//call initialize
var playerContainer = d3.select('body')
.select('.playground')
.select('svg')  //on mouse enter svg put the player element where the mouse is

var playerCircles = playerContainer.selectAll('rect')
.data(player)
.enter()
.append('rect')

var playerAttrs = playerCircles
  .style("fill", function(d){return d.color;})
.attr("width", 12)
.attr("height", 12)





function enemyUpdate(data){



  var circleAttrs = circles
  .transition().duration(1500)
  .attr("cx", function(d){return makeRandomX(d.radius);})
  .attr("cy", function(d){return makeRandomY(d.radius);})
  .attr("r", function(d){return d.radius;})
  .style("fill", function(d){return d.color;})

};

var makeRandomX = function(radius){
  var newX = Math.floor(Math.random()*(960-radius));
  if(newX < radius){
    newX = radius;
  }
  return newX;
}

var makeRandomY = function(radius){
  var newY = Math.floor(Math.random()*(500-radius));
  if(newY < radius){
    newY = radius;
  }
  return newY;
}

setInterval(function(){

  enemyUpdate(data)
},2000);

//set an interval for player





















