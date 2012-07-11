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
		timer: 500,
		sequence: ['up','up','down','down','left','right','left','right','b','a','enter'],
		sequences: {},
		onComplete: function() {}
	},
	_sequence: false,
	_sequences: false,
	_queue: false,
	_timer: false,
	initialize: function(options) {
		this.setOptions(options);
		this._sequence = this.options.sequence;
		this.initSequences();
		this.resetSequence();
		window.addEvent('keydown', this.keyEvents.bind(this));
	},
	resetSequence: function() {
		console.log('reset');
		this._queue = Array.clone(this._sequence);
		return this;
	},
	stopTimer: function() {
		clearTimeout(this._timer);
		return this;
	},
	resetTimer: function() {
		this._timer = window.setTimeout(this.resetSequence.bind(this), this.options.timer.toInt());
	},
	keyEvents: function(e) {
		console.log(e.key.charCodeAt())
		if (e.key.charCodeAt() == 27) this.stopTimer().resetSequence();
		if (e.shift && e.key.charCodeAt() == 16) return; // ignore SHIFT alone - thanks Garrick !
		if (e.control && e.key.charCodeAt() == 17) return; // ignore CONTROL alone
		if (e.alt && e.key.charCodeAt() == 18) return; // ignore ALT alone

		if (this.keyCompare(this._queue[0], e)) {
			this.stopTimer().resetTimer();
			this._queue.shift();
			if (!this._queue || this._queue.length == 0) {
				this.fireEvent('complete');
			}
		} else
			this.resetSequence();
	},
	keyCompare: function(keyRef, e)
	{
		if (e.shift && keyRef.test('s+') && keyRef.replace('s+', '') == e.key) // match shift+key
			return true;
		else if (e.alt && keyRef.test('a+') && keyRef.replace('a+', '') == e.key) // match tab+key
			return true;
		else if (e.control && keyRef.test('c+') && keyRef.replace('c+', '') == e.key) // match cntrl+key
			return true;
		else if (!e.shift && keyRef == e.key)
			return true;
		else
			return false;
	}
});


window.addEvent('domready', function() {
	// Use the default Konami Code sequence ..
	var test1 = new KCode();
	test1.addEvent('complete', function() {
		alert('Konami sequence !');
	});

	// Or create your own sequence ..
	var test2 = new KCode({
		'timer': 1000,
		'sequence': ['a', 's+a']
	});
	test2.addEvent('complete', function() {
		alert('Custom sequence !');
	});
	// You can now add shift+key, control+key, or alt+key in your sequence ..
	var test3 = new KCode({
		'sequence': ['a', 'c+b', 's+c', 'a+d'],
		'timer': 1500
	});
	test3.addEvent('complete', function() {
		alert('Custom sequence with a twist !');
	});
});