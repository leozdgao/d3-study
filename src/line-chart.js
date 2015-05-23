/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

exports.draw = function (data) {
  // define dimension
  var outerWidth = 960,
      outerHeight = 500,
      margin = { top: 20, right: 30, bottom: 30, left: 40 },
      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom;
  
  // define month abbreviation
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // function for calculating x axis
  var x = d3.scale.ordinal()
    .domain(month)
    .rangePoints([20, width]);
  
  // function for calculating y axis
  var y = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([height, 0]);
  
  // define axis
  var xAxis = d3.svg.axis().scale(x).orient('bottom');
  var yAxis = d3.svg.axis().scale(y).orient('left');
  
  // define line function
  var line = d3.svg.line()
    .x(function (d, i) { return x(month[i]); })
    .y(function (d) { return y(d); })
    .interpolate('linear');
    
  // return the inner 'g' container element
  var chart = d3.select('.line-chart')
    .attr('width', outerWidth)
    .attr('height', outerHeight)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
  
  // append x axis  
  chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(xAxis);
    
  // append y axis
  chart.append('g')
    .attr('class', 'y axis')
    .call(yAxis);
    
  // append line
  chart.append('path')
    .attr('class', 'path')
    .attr('d', line(data));
  
  // generate circle for line chart
  var lineCircle = chart.selectAll('.circle')
    .data(data)
    .enter().append('g');
  
  // append circle
  lineCircle.append('circle')
    .attr('class', 'line-circle')
    .attr('cx', line.x())
    .attr('cy', line.y())
    .attr('r', 3);
  
  // append text
  lineCircle.append('text')
    .attr('x', function (d, i) { return x.range()[i]; })
    .attr('y', function (d) { return y(d); })
    .attr('dy', '-.5em')
    .attr('text-anchor', 'middle')
    .text(function (d) { return d; });
};