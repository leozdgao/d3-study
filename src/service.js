exports.randomArray = function (min, max, length) {
	var result = [], rand = exports.random(min, max);
  
	while(+length --) {
		result.push(rand.next());
	}
	
	return result;
};

// return a random value between min and max, including min and max
exports.random = function (min, max) {
  return {
    next: function() {
      return Math.floor(min + (max - min + 1) * Math.random());    
    }
  };
};