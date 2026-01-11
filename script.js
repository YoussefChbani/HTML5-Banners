let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator-line');

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    
    requestAnimationFrame(() => {
        slides[slideIndex - 1].classList.add('active');
        indicators[slideIndex - 1].classList.add('active');
    });
}

const stage = document.getElementById('patrolSlide');

function moveBeam(e) {
    const rect = stage.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    stage.style.setProperty('--x', `${x}px`);
    stage.style.setProperty('--y', `${y}px`);
}

stage.addEventListener('mousemove', moveBeam);
stage.addEventListener('touchmove', moveBeam);
