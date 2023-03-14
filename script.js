'use strict';

const section1 = document.querySelector('#section-1');
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#nav-logo');
const navLinks = document.querySelectorAll('.nav-link');

let section1Observer = new IntersectionObserver(
	(e) => {
		const [entry] = e;
		console.log(entry);
		if (!entry.isIntersecting) {
			navbar.style.backgroundColor = 'white';
			logo.src = `./img/logo-dark.png`;
			navLinks.forEach((link) => {
				link.style.color = 'black';
			});
		}
		if (entry.isIntersecting) {
			navbar.style.backgroundColor = 'transparent';
			navbar.style.color = 'white';
			logo.src = `./img/logo-light.png`;
			navLinks.forEach((link) => {
				link.style.color = 'white';
			});
		}
	},
	{
		root: null,
		threshold: 0.8,
	}
);

section1Observer.observe(section1);
