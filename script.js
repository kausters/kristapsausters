'use strict';

// Already running deferred so no need for DOMContentLoaded

/**
 * @returns {number}
 */
function getAge() {
	const birth = 719141700 * 1000;
	const now = Date.now();
	const age = new Date(now - birth);
	return age.getFullYear() - 1970;
}

/**
 * @returns {Element}
 */
function getTarget() {
	return document.getElementById('age');
}

getTarget().innerText = getAge();
