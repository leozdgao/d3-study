/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

exports.draw = function (data) {
  // define dimension
  var outerWidth = 960,
      outerHeight = 500,
      margin = { top: 20, right: 30, bottom: 30, left: 40 },
      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom;
  
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
  
  // return the inner 'g' element
  var chart = d3.select('.bar-chart')
  	.attr('height', outerHeight)
  	.attr('width', outerWidth)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
  
  // append x asix
  chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(xAxis);
  
  // append y asix
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
  
  // generate 'g' according the data
  var bar = chart.selectAll('.bar')
  	.data(data)
  	.enter().append('g')
    .attr('class', 'bar');
  
  // append rect for each bar
  bar.append('rect')
    .attr('x', function (d, i) { return x(i); })
    .attr('y', function (d) { return y(d); })
    .attr('height', function (d) { return height - y(d); })
    .attr('width', x.rangeBand());
  
  // append text for each bar
  bar.append('text')
    .attr('x', function (d, i) { return x(i) + x.rangeBand() / 2; })
    .attr('y', function (d) { return y(d); })
    .attr('dy', '-.3em')
    .attr('text-anchor', 'middle')
    .text(function (d) { return d; });
};