var d3 = require('d3');

var records = [
  { quantity: 2, total: 190, tip: 100, type: "tab" },
  { quantity: 2, total: 190, tip: 100, type: "tab" },
  { quantity: 1, total: 190, tip: 200, type: "visa" },
  { quantity: 2, total: 190, tip: 0, type: "tab" },
  { quantity: 2, total: 300, tip: 0, type: "tab" },
  { quantity: 2, total: 190, tip: 0, type: "cash" },
  { quantity: 1, total: 190, tip: 0, type: "tab" },
  { quantity: 2, total: 90, tip: 200, type: "tab" },
  { quantity: 2, total: 90, tip: 0, type: "tab" },
  { quantity: 2, total: 190, tip: 100, type: "cash" },
  { quantity: 2, total: 200, tip: 100, type: "visa" }
];

module.exports = d3.nest()
  .key(function(d) { return d.type; })
  .key(function(d) { return d.tip; })
  .entries(records);