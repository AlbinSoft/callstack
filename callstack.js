
callstack = {
	stack: [],
	run: async function () {
		for(var ks in this.stack) {
			var s = this.stack[ks];
			for(var kc in s) {
				var c = s[kc];
				if(c) await c();
			}
		}
	},
	add: function(p, cb) {
		this.stack[p] = this.stack[p] || [];
		this.stack[p].push(cb);
	},
};

window.addEventListener('DOMContentLoaded', callstack.run.bind(callstack));
