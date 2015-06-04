/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

exports.draw = function() {
  d3.select('#transition-example')
    .append('div')
      .style('background-color', 'blue')
      .style('width', '100px').style('height', '100px')
    .transition()
    .duration(2000)
      .style('background-color', 'steelblue')
      .style('width', '150px').style('height', '150px');
};