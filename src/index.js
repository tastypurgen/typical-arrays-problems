exports.min = function min(array) {
	if (!array || array.length < 1) return 0;
	else return Math.min(...array);
};

exports.max = function max(array) {
	if (!array || array.length < 1) return 0;
	return Math.max(...array);
};

exports.avg = function avg(array) {
	if (!array || array.length < 1) return 0;
	return (
		array.reduce((a, b) => {
			return a + b;
		}, 0) / array.length
	);
};
