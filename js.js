const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const ul = document.querySelector('ul');
    ul.classList.toggle('active');



}

btnMobile.addEventListener('click', toggleMenu);

