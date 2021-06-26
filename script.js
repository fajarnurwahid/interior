// Toggle Navbar
const menuIcon = document.querySelector('nav .menu-icon .fas'),
menu = document.querySelector('nav .nav-menu');

menuIcon.addEventListener('click', function() {
	menu.classList.toggle('active');
	menu.classList.contains('active') ? this.classList.replace('fa-bars', 'fa-times') : this.classList.replace('fa-times', 'fa-bars');
});



// Active menu
const allMenu = document.querySelectorAll('nav .nav-menu a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
	let current = '';
	sections.forEach( function(sect) {
		if (this.pageYOffset + 50 > sect.offsetTop) {
			current = sect.getAttribute('id');
		}
	});

	allMenu.forEach(function(nav) {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});
});



allMenu.forEach((singleMenu)=> {
	singleMenu.addEventListener('click', function() {
		menu.classList.remove('active');
	});
});