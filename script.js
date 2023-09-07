
function learnMore(){
    let about = qs('.about');
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

document.addEventListener('DOMContentLoaded', function() {
    const smokescreen = qs('.smokescreen');
    smokescreen.classList.add('hidden');
    setTimeout(() => {
        smokescreen.style.display = 'none'; 
    }, 900);
});


function id(x) {
    return document.getElementById(x);
}

function qs(x) {
    return document.querySelector(x);
}

function qsa(x) {
    return document.querySelectorAll(x);
}