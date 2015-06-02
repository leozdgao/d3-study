var service = require('./service');
var barChart = require('./bar-chart');
var data = service.randomArray(1, 20, 20);
var rand = service.random(1, 20);
barChart.draw(service.randomArray(1, 20, 20));

var btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function() {
  
});
setInterval(function () {
  barChart.draw(function() {
    data.shift();
    data.push(rand.next());
    return data;
  });
}, 1000);

require('./three-circle').draw(service.randomArray(100, 300, 5));
require('./line-chart').draw(service.randomArray(1, 20, 12));

console.dir(require('./working_with_array'));
require('./color-interpolate').draw(20, ['steelblue', 'white']);