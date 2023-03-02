const classMini = document.querySelector('.mini');
const classMax = document.querySelector('.max');
const classPro = document.querySelector('.pro');
const classMen = document.querySelector('.men');
const classCollections = document.querySelector('.collections');

// animation for class .mini
classMini.addEventListener('click', () => {
    
    // change the colour of the navbar from black to white or vice versa
    classMen.classList.toggle('navbarNewColor');
    classCollections.classList.toggle('navbarNewColor');

    // rotate the image and reset other classes
    classMini.classList.toggle('rotate');
    classMax.classList.remove('rotate');
    classPro.classList.remove('rotate');

    // change the width
    if (classMini.classList.contains('rotate') === true) {
        classMini.style.width = "60%";
        classMax.style.width = "20%";
        classPro.style.width = "20%";
    } else {
        classMini.style.width = "calc(100% / 3)";
        classMax.style.width = "calc(100% / 3)";
        classPro.style.width = "calc(100% / 3)";
    }
});

classMax.addEventListener('click', () => {
    
    classMen.classList.remove('navbarNewColor');
    classCollections.classList.remove('navbarNewColor');

    classMax.classList.toggle('rotate');
    classMini.classList.remove('rotate');
    classPro.classList.remove('rotate');

    if (classMax.classList.contains('rotate') === true) {
        classMini.style.width = "20%";
        classMax.style.width = "60%";
        classPro.style.width = "20%";
    } else {
        classMini.style.width = "calc(100% / 3)";
        classMax.style.width = "calc(100% / 3)";
        classPro.style.width = "calc(100% / 3)";   
    }
});

classPro.addEventListener('click', () => {
    
    classMen.classList.remove('navbarNewColor');
    classCollections.classList.remove('navbarNewColor');

    classPro.classList.toggle('rotate');
    classMini.classList.remove('rotate');
    classMax.classList.remove('rotate');

    if (classPro.classList.contains('rotate') === true) {
        classMini.style.width = "20%";
        classMax.style.width = "20%";
        classPro.style.width = "60%";
    } else {
        classMini.style.width = "calc(100% / 3)";
        classMax.style.width = "calc(100% / 3)";
        classPro.style.width = "calc(100% / 3)";   
    }
});
