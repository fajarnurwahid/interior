const iconMenu = document.querySelector('nav .menu-icon .fas');
const menu = document.querySelector('nav .nav-menu');

iconMenu.addEventListener('click', function() {
	menu.classList.toggle('show');
	menu.classList.contains('show') ? this.classList.replace('fa-bars', 'fa-times') : this.classList.replace('fa-times', 'fa-bars');
});




const allMenu = document.querySelectorAll('nav .nav-menu li a');
allMenu.forEach((navMenu)=> {
	navMenu.addEventListener('click', function() {
		menu.classList.remove('show');
		iconMenu.classList.replace('fa-times', 'fa-bars');
	});
})