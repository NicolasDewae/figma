const classMini = document.querySelector('.mini');
const classMen = document.querySelector('.men');
const collections = document.querySelector('.collections');

classMini.addEventListener('mouseover', () => {
    classMen.classList.add('navbarNewColor');
    collections.classList.add('navbarNewColor');
});

classMini.addEventListener('mouseout', () => {
    classMen.classList.remove('navbarNewColor');
    collections.classList.remove('navbarNewColor');
});