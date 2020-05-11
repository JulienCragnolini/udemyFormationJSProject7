let bouton = document.querySelector('#mode');
let span = document.querySelector('span');

if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}

bouton.addEventListener('click', () => {
    if(document.body.classList.contains('dark')){
        // Mode clair
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    }
    else {
        // Mode sombre
        modeSombre();
    }
})

function modeSombre() {
    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
}