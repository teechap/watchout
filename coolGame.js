
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

var svgContainer = d3.select('body')
.select('.playground')
.append('svg');

//create initialize function
var circles = svgContainer.selectAll('circle')
.data(data)
.enter()
.append('circle')

//call initialize


function update(data){
  console.log("in update!")


  console.log('DATA: ', data);
  var circleAttrs = circles
  .transition().duration(1500)
  .attr("cx", function(d){return makeRandomX(d.radius);})
  .attr("cy", function(d){return makeRandomY(d.radius);})
  .attr("r", function(d){return d.radius;})
  .style("fill", function(d){return d.color;});

};

var makeRandomX = function(radius){
  var newX = Math.floor(Math.random()*(900-radius));
  return newX;
}

var makeRandomY = function(radius){
  var newY = Math.floor(Math.random()*(500-radius));
  return newY;
}

setInterval(function(){

  update(data)
},2000);

//set an interval
//
