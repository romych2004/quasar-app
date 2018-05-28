// import something here

const handler = function(app, router, Vue) {
	this.get = (err) => {
		console.error(err);
	}

	this.post = (err) => {
		console.error(err);
	}
};

// leave the export, even if you don't use it
export default ({app, router, Vue}) => {
	Vue.prototype.$handler = new handler(app, router, Vue);
};
