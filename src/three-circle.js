/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

exports.draw = function (data) {
  var circle = d3.select('.three-circle')
    .attr('height', 50)
    .attr('width', 960)
    .selectAll('.circle')
    .data(data);
    
  circle.enter().append('circle')
    .attr('class', 'circle')
    .attr('r', function (d) { return Math.sqrt(d); })
    .attr('cx', function (d, i) {
      var x = 15 * (i + 1) + Math.sqrt(d);
      while (i--) {
        x += 2 * Math.sqrt(data[i]);
      }
      return x;
    })
    .attr('cy', 20);
    
  circle.exit().remove();
};