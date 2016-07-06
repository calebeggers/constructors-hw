function Person (options) {
	var options = options || {};
	this.pet = function(dog) {
		return dog.status = "happy";
  	}
  	this.feed = function (dog) {
  		return dog.hungry = false;
	}
	if (options.cool === undefined) {
		this.cool = false;
	} else {
		this.cool = options.cool;
	}
};

export {Person}