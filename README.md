moo-KCode
===========

This is my humble implementation of the Konami Code for Mootools.

Tested with Mootools-Core 1.4.5

[Demo](https://tinker.io/ac619)

How to use
----------

Include mootools-core, than include moo-KCode.js in your document <head>


	/*
		moo-KCore.js accepts three arguments as options:
			delay: the amount of time after a correct keystroke before it resets the sequence
			sequence: an array composed of keyboard keys (except "shift")
			onComplete: a callback function to run when the sequence is complete
	*/
	window.addEvent('domready', function() {
		// Use the default Konami Code sequence ..
		var foo = new KCode();
		foo.addEvent('complete', function() {
			alert('Konami !');
		});
	
		// Or create your own sequence sequence ..
		var bar = new KCode({
			'sequence': ['a', 'b', 'c', 'd']
		});
		bar.addEvent('complete', function() {
			alert('Custom !');
		});
	});

Screenshots
-----------

![Screenshot 1](https://raw.github.com/kelexel/moo-KCode/master/moo-KCode.png)
