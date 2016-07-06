function Dog (options) {
	var options = options || {};
	this.color = options.color;
	if (options.hungry === undefined) {
		this.hungry = true;
	} else {
		this.hungry = options.hungry;
	}
	this.status = "normal";
	this.owner = options.owner
};

export {Dog}