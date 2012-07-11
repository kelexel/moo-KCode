/*
---
description: Mootools Konami Code.

license: GPL

authors:
- Rudolph Sand

requires: 
- core/1.4.5

provides: [KCode]

...
*/

var KCode = new Class({
	Implements: [Options, Events],
	options: {
		delay: 500,
		sequence: ['up','up','down','down','left','right','left','right','b','a','enter'],
		onComplete: function() {}
	},
	_sequence: false,
	_queue: false,
	_timer: false,
	initialize: function(options) {
		this.setOptions(options);
		this._sequence = this.options.sequence;
		this.resetSequence();
		window.addEvent('keydown', this.keyEvents.bind(this));
	},
	resetSequence: function() {
		this._queue = Array.clone(this._sequence);
	},
	resetTimer: function() {
		clearTimeout(this._timer);
		this._timer = window.setTimeout(this.resetSequence.bind(this), this.options.delay); 
	},
	keyEvents: function(e) {
		if (e.key == this._queue[0]) {
			this.resetTimer();
			this._queue.shift();
			if (!this._queue || this._queue.length == 0) {
				this.fireEvent('complete');
			}
		} else
			this.resetSequence();
	}
});
