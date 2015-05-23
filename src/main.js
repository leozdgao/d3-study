var service = require('./service');

require('./bar-chart').draw(service.randomArray(1, 20, 20));
require('./three-circle').draw(service.randomArray(100, 300, 5));
require('./line-chart').draw(service.randomArray(1, 20, 12));