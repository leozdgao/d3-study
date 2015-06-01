/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

// define dimension
var outerWidth = 960,
      outerHeight = 500,
      margin = { top: 20, right: 30, bottom: 30, left: 40 },
      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom;
  
  // return the inner 'g' container element
  var chart = d3.select('.bar-chart')
  	.attr('height', outerHeight)
  	.attr('width', outerWidth)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

exports.draw = function (data) {
  if (typeof data == 'function') {
    data = data.call();
  }
  
  if(Object.prototype.toString.call(data) !== '[object Array]') data = [];
  
  // function for calculating x axis
  var x = d3.scale.ordinal()
  	.domain(data.map(function (d, i) {  return i;  }))
  	.rangeRoundBands([0, width], .1);
  
  // function for calculating y axis
  var y = d3.scale.linear()
  	.domain([0, d3.max(data)])
  	.range([height, 0]);
  
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');
  
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');
  
  // append x asix
  chart.select('.x.axis').remove();
  chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(xAxis);
  
  // append y asix
  chart.select('.y.axis').remove();
  chart.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    // append text for y asix
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Frequency');
  
  // Add new bar for no bounding data
  var bar = chart.selectAll('.bar').data(data)
  	.enter().append('g')
    .attr('class', 'bar');
    
  bar.append('rect');
  bar.append('text');
  
  var wrapper = chart.selectAll('.bar').data(data);
  // append rect for each bar
  wrapper.select('rect')
    .attr('x', function (d, i) { return x(i); })
    .attr('y', function (d) { return y(d); })
    .attr('height', function (d) { return height - y(d); })
    .attr('width', x.rangeBand());
  
  // append text for each bar
  wrapper.select('text')
    .attr('x', function (d, i) { return x(i) + x.rangeBand() / 2; })
    .attr('y', function (d) { return y(d); })
    .attr('dy', '-.3em')
    .attr('text-anchor', 'middle')
    .text(function (d) { return d; });
    
  // remove the obsolete element
  wrapper.exit().remove();
};