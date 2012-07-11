moo-KCode
===========

This is my humble implementation of the Konami Code for Mootools.

Out of the box, it will work with the regular Konami Code sequence.

If you miss a key, or if you press ESC key at any time, the sequence will reset.

* 0.1 : initial release

* 0.2 : added custom sequence

* 0.3 : added support for shift+key, control+key, alt+key in the sequence, ESC key resets the sequence

Tested with Mootools-Core 1.4.5

[Demo](https://tinker.io/d245d)

Many thanks to the #mootools@freenode people for the support and motivation ;)

How to use
----------

Include mootools-core, than include moo-KCode.js in your document HEAD

moo-KCore.js accepts three arguments as options:

* timer: the amount of time (in ms) to wait for a new key strocke before we reset the sequence, default to 500

* sequence: an array composed of keyboard keys - to use a SHIFTed key, simply prefix the key with "s+" (see examples below)

* onComplete: a callback function to run when the sequence is complete

Here are three examples:

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

Screenshots
-----------

![Screenshot 1](https://raw.github.com/kelexel/moo-KCode/master/moo-KCode.png)