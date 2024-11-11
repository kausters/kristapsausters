'use strict';

function setAge() {
	const birth = 719141700 * 1000;
	const now = Date.now();

	// JS isn't great with dates that are a duration
	const age = new Date(now - birth).getFullYear() - 1970;

	const element = document.getElementById('age');
	element.innerText = age.toString();
}

function setItemIndex() {
	const list = document.querySelector('ul');
	Array.from(list.children).forEach((item: HTMLElement, index) => {
		item.style.setProperty('--index', (index + 1).toString());
	});
}

// Already running deferred so no need for DOMContentLoaded
setAge();
setItemIndex();
