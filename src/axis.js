var d3 = require('d3');

// define dimension
var width = 500,
    height = 500,
    margin = 25;

var svg = d3.select('#axis-example').append('svg')
  .attr('class', 'axis')
  .attr('width', width)
  .attr('height', height);
  
exports.draw = function() {
  renderXAxis();
  renderYAxis();
};

function renderXAxis() {
  var axisLength = width - 2 * margin;
  var scale = d3.scale.linear()
        .domain([0, 100])
        .range([0, axisLength]);
  var xAxis = d3.svg.axis()
        .scale(scale)
        .orient('bottom');
  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(' + margin + ', ' + (height - margin) + ')')
    .call(xAxis);
    
  d3.selectAll('g.x-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', - (height - 2 * margin));
    
    // rescale
    
    setInterval(function() {
      var num = Math.round(Math.random() * 100);
      xAxis.scale().domain([0, num]);
      svg.select('g.x-axis')
        .transition()
        .call(xAxis);
        
      d3.selectAll('g.x-axis g.tick').select('.grid-line').remove();
      d3.selectAll('g.x-axis g.tick')
        .append('line')
        .classed('grid-line', true)
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', - (height - 2 * margin));
    }, 2000); 
}

function renderYAxis() {
  var axisLength = height - 2 * margin;
  var scale = d3.scale.linear()
        .domain([100, 0])
        .range([0, axisLength]);
  var yAxis = d3.svg.axis()
        .scale(scale)
        .orient('left');
  svg.append('g')
    .attr('class', 'y-axis')
    .attr('transform', 'translate(' + margin + ', ' + margin + ')')
    .call(yAxis);
    
  d3.selectAll('g.y-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', width - 2 * margin)
    .attr('y2', 0);
}