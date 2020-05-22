function toArray(num) {
	return num.toString().split("").map(n => parseInt(n));
}

function toNumber(arr) {
	return parseInt(arr.join(""));
}


toArray(235)
// toArray(19)
// toArray(0)
// toNumber([2, 3, 5])
// toNumber([1, 9])
// toNumber([0])