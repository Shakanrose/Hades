let fondo = document.getElementById('fondo');
let logo = document.getElementById('logo');
let mainleaf = document.getElementById('mainleaf');
let main = document.getElementById('main');
let capabot = document.getElementById('capabot');
let capatop = document.getElementById('capatop');

window.addEventListener('scroll', function() {
	let value = window.scrollY;
	main.style.left = value * 0.25 + 'px';
	mainleaf.style.top = value * 0.50 + 'px';
	logo.style.top = value * 0.35 + 'px';
})
//main.style.left = -value * 0.25 + 'px'; para el movimiento hacia la izquierda
//main.style.left = value * 0.25 + 'px'; para el movimiento hacia la derecha