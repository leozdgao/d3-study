exports.randomArray = function (min, max, length) {
	var result = [];
  
	while(+length --) {
		result.push(random(min, max));
	}
	
	return result;
};

// return a random value between min and max, including min and max
function random (min, max) {
	return Math.floor(min + (max - min + 1) * Math.random());
}