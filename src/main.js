var service = require('./service');
var barChart = require('./bar-chart');
var data = service.randomArray(1, 20, 20);
var rand = service.random(1, 20);
barChart.draw(service.randomArray(1, 20, 20));

var btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function() {
  data.shift();
  data.push(rand.next());
  barChart.draw(data);
});

require('./three-circle').draw(service.randomArray(100, 300, 5));
require('./line-chart').draw(service.randomArray(1, 20, 12));