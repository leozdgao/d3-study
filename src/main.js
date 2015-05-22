/// <reference path="../typings/d3/d3.d.ts" />

var d3 = require('d3');
var service = require('./service');

var data = service.getData();

var width = 960,
    height = 500,
	barWidth = width / data.length;

var x = d3.scale.ordinal()
	.domain(data.map(function (d, i) {  return i;  }))
	.rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
//	.domain([0, d3.max(data)])
	.domain([0, 20])
	.range([height, 0]);

var chart = d3.select('.chart')
	.attr('height', height)
	.attr('width', width);
	
var bar = chart.selectAll('g')
	.data(data)
	.enter().append('g')
	.attr('transform', function (d, i) {
		return 'translate(' + x(i) + ', 0)';
	});
	
bar.append('rect')
	.attr('y', function (d) { return y(d); })
	.attr('height', function (d) { return height - y(d); })
	.attr('width', x.rangeBand());
	
bar.append('text')
	.attr('y', function (d) { return y(d) + 3; })
	.attr('x', x.rangeBand() / 2)
	.attr('dy', '.75em')
	.text(function (d) { return d; });