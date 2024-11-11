'use strict';

function getAge() {
	const birth = 719141700 * 1000;
	const now = Date.now();
	const age = new Date(now - birth);

	// JS isn't great with dates that are a duration
	return age.getFullYear() - 1970;
}

// Already running deferred so no need for DOMContentLoaded
const element = document.getElementById('age');
element.innerText = getAge().toString();
