moo-KCode
===========

This is my humble implementation of the Konami Code for Mootools.

Tested with Mootools-Core 1.4.5

[Demo](https://tinker.io/841dc/2)

How to use
----------

Include mootools-core, than include moo-KCode.js

Just add a callback method to the onComplete event:

	<script type="text/javascript">
		window.addEvent('domready', function() {
			var foo = new KCode();
			foo.addEvent('complete', function() {
				alert('Konami !');
			});
		});
	</script>
