
var data = [
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 50, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 50, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 50, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 10, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"},
  {"x_axis": 480, "y_axis": 250, "radius": 20, "color": "#00326D"}
];
var player = [
  {"x": 30, "y": 30, "width": 12, "height": 12, "color": "green"},
  ]


var highScore = 0;
var currentScore = 0;



var scoreInc = function(){
  currentScore++;
  updateScore();
  // updateScoreboardText();
}
setInterval(scoreInc, 200);

var scoreboard = function(){
  if(currentScore > highScore){
    highScore = currentScore;
  }
  currentScore = 0;
  updateScore();
}


var updateScore = function(){
  d3.select('.scoreboard #high span').text(highScore);
  d3.select('.scoreboard #current span').text(currentScore);
}



// var updateScoreboardText = function(){
//   var high = document.getElementById("high");
//   var current = document.getElementById("current");
//   var collisions = document.getElementById("collisions");
//   console.log(highScore, currentScore);
//   high.innerHTML = highScore.toString();
//   current.innerHTML = currentScore.toString();
// }

// var blah = function(){
//   var scoreBoard = d3.select('body')
//   .select('.scoreboard')
//   .data([currentScore, highScore, collisions])
//   .selectAll('div')
//   .transition()
//   .text(currentScore);
// }

var svgContainer = d3.select('body')
.select('.playground')
.append('svg').on("mousemove", function(d){
  var position = d3.mouse(this);
  d3.selectAll(".player")
  .attr('x', position[0]-6)
  .attr('y', position[1]-6)

})


var circles = svgContainer.selectAll('circle')
.data(data)
.enter()
.append('circle').on("mouseenter", function(){
  d3.selectAll(".player")
    // console.log("HIT")
  // .transition()
  // .duration(1)
  // .style("fill", "red")  //toggle on and off red fill to show user there was a collision
  // .transition()
  // .duration(100)
  // .style("fill", "green")
})


var playerContainer = d3.select('body')
.select('.playground')
.select('svg')

var playerCircles = playerContainer.selectAll('rect')
.data(player)
.enter()
.append('rect')


var playerAttrs = playerCircles
  .style("fill", function(d){return d.color;})
.attr("width", 12)
.attr("height", 12)
// .attr("x", 30)
// .attr("y", 30)
.attr("rx", 20)
.attr("ry", 20)
.classed("player", true)

// var playerTween = function(){
//   var rectx = d3.select(this);
//   return function(){
//     console.log(rectx.attr("x"));
//   };
// }
var count=0;
var myTween = function(){
  // console.log(d3.select(this));
  var obj = d3.select(this);


  return function(){
    var px = d3.select('body')
    .select('.playground')
    .select('svg')
    .selectAll('rect')
    .attr("x")

     var py = d3.select('body')
    .select('.playground')
    .select('svg')
    .selectAll('rect')
    .attr("y")

    var rx = d3.select('body')
      .select('.playground')
      .select('svg')
      .selectAll('rect')
      .attr("rx")

    var enemyX = obj.attr("cx")
    var enemyY = obj.attr("cy")
    var enemyR = obj.attr("r")

    var rx = Number(rx);
    var enemyR = Number(enemyR);
    if( (Math.abs(enemyX - px)) < (rx+enemyR)  && (Math.abs(enemyY - py)) < (rx+enemyR)){
      //call score function
      scoreboard();
      console.log("HIT: ", count)

    }




  }
}


function enemyUpdate(data){



  var circleAttrs = circles
  .transition().duration(1600)
  .tween("myTween", myTween)
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

// setInterval(function(){
//   blah();
// }, 200);
















