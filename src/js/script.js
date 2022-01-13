const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const imgs = document.querySelector('.images');
const marks = document.querySelectorAll('.mark');
const marksDiv = document.querySelector('.marks');
const gallery = document.querySelector('.gallery');

let actualImage = 1;
updateMarks();

function updateMarks() {
    marks.forEach(mark => {
        if(mark.getAttribute('id') == actualImage) {
            mark.style.backgroundColor = '#000000';
        } else {
            mark.style.backgroundColor = '#FFFFFF';
        }
    });

    if(actualImage === 4) btnNext.style.opacity = '0.5';
    else btnNext.style.opacity = '1';

    if(actualImage === 1) btnPrev.style.opacity = '0.5';
    else btnPrev.style.opacity = '1';
}

function setMarksMargin() {
    const galleryHeight = gallery.getBoundingClientRect().height;
    marksDiv.style.marginBottom = `${1.15 * galleryHeight}px`;
}

function nextImage() {
    const galleryWidth = gallery.getBoundingClientRect().width;
    if (actualImage < 4) {
        imgs.style.transform = `translateX(-${actualImage * galleryWidth}px)`;
        actualImage++;
    }
    updateMarks();
}

function prevImage() {
    const galleryWidth = gallery.getBoundingClientRect().width;
    if (actualImage > 1) {
        actualImage--;
        imgs.style.transform = `translateX(-${(actualImage - 1) * galleryWidth}px)`
    }
    updateMarks();
}

btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);
window.onresize = setMarksMargin;
window.onload = setMarksMargin;