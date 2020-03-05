const modul = document.querySelector('.text');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener ('click' , function () {
	modul.classList.remove('bounce-in-top');
	modul.classList.add('bounce-out-bottom');
	setTimeout(function() {
		modul.classList.add('empty');
	}, 1000);
});

showBtn.addEventListener ('click' , function () {
	modul.classList.remove('bounce-out-bottom', 'empty');
	modul.classList.add('bounce-in-top');
});