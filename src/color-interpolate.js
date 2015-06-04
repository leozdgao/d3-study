/// <reference path="../typings/d3/d3.d.ts" />
var d3 = require('d3');

exports.draw = function(count, range) {
  var colorScale = d3.scale.linear()
    .domain([0, count])
    .range(range);
  var data = [];
  for(var i = 0; i < count; i++) data.push(i);
  
  getSelection().data(data)
    .enter()
    .append('div')
    .classed('color-cell', true)
    .append('span');
  
  getSelection().data(data)
    .style('background-color', function(d) {
      return colorScale(d);
    })
    .select('span')
    .text(function(d, i) { return i; });
    
  function getSelection() {
    return d3.select('#color-gallery').selectAll('.color-cell');
  }
};
