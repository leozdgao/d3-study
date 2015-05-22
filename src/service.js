exports.getData = function () {
	return randomArray(1, 20, 12);
};

function random (min, max) {
	return Math.floor(min + (max - min) * Math.random());
}

function randomArray (min, max, length) {
	var result = [];
	while(+length --) {
		result.push(random(min, max));
	}
	
	return result;
}