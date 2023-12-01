const gofrirovka = document.getElementById('gofrirovka');
const printing = document.getElementById('printing');

function hideAllBlocks() {
	gofrirovka.style.display = 'none';
	printing.style.display = 'none';
}

gofrirovka.style.display = 'flex';
printing.style.display = 'none';

const sliderButtons = document.querySelectorAll('.slider-btn');

sliderButtons.forEach(button => {
	button.addEventListener('click', function() {
		sliderButtons.forEach(btn => btn.classList.remove('active-btn'));
		this.classList.add('active-btn');
		hideAllBlocks();

		const buttonText = this.innerText.toLowerCase();
		if (buttonText === 'гофрировальные агрегаты') {
			gofrirovka.style.display = 'flex';
			printing.style.display = 'none';
		} else if (buttonText === 'печатные машины') {
			gofrirovka.style.display = 'none';
			printing.style.display = 'flex';
		}
		
	});
});

const arrowButtons = document.querySelectorAll('.arrow-btn');
arrowButtons.forEach(button => {
	button.addEventListener('click', () => {
		const sliders = document.querySelectorAll('.header-slider');
		const slidersActive = document.querySelectorAll('.header-slider-active');

		sliders.forEach(slider => {
			slider.classList.toggle('header-slider');
			slider.classList.toggle('header-slider-active');
		});
	  
		slidersActive.forEach(sliderActive => {
			sliderActive.classList.toggle('header-slider-active');
			sliderActive.classList.toggle('header-slider');
		});
	});
});

const arrowButtons320 = document.querySelectorAll('.arrow-btn-320');
arrowButtons320.forEach(button => {
	button.addEventListener('click', () => {
		arrowButtons320.forEach(btn => {
			const currentFill = btn.getAttribute('src');

			if (currentFill === '/icons/point-active.svg') {
				btn.setAttribute('src', '/icons/point-disabled.svg');
			} else {
				btn.setAttribute('src', '/icons/point-active.svg');
			}
		});

		const sliders = document.querySelectorAll('.header-slider');
		const slidersActive = document.querySelectorAll('.header-slider-active');

		sliders.forEach(slider => {
			slider.classList.toggle('header-slider');
			slider.classList.toggle('header-slider-active');
		});
	  
		slidersActive.forEach(sliderActive => {
			sliderActive.classList.toggle('header-slider-active');
			sliderActive.classList.toggle('header-slider');
		});
	});
});


const video = document.getElementById("myVideo");
const btn = document.getElementById("playPause");
const playIcon = "/icons/play.svg"; 
const pauseIcon = "/icons/pause.svg"; 

function togglePlayPause() {
	if (video.paused || video.ended) {
		video.play();
		btn.querySelector('img').setAttribute('src', pauseIcon);
	} else {
		video.pause();
		btn.querySelector('img').setAttribute('src', playIcon);
	}
}

btn.addEventListener("click", togglePlayPause);

window.onload = function() {
	if (video.paused) {
		btn.querySelector('img').setAttribute('src', playIcon);
	}
}

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-img');

    burgerMenuBtn.addEventListener('click', function() {
			mobileNav.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
			mobileNav.classList.remove('active'); 
    });
});