
function learnMore(){
    const about = qs('.about');
    const learnmore = id('learn-more');
    console.log(learnmore);     
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    setTimeout(() => {
        learnmore.classList.add('hidden');
    }, 1000);
}

window.addEventListener('scroll', function() {
    const elementTop = qs('.about').getBoundingClientRect().top;
    const scrollY = window.scrollY;
    if(scrollY < elementTop){
        const learnmore = id('learn-more');
        learnmore.classList.remove('hidden');
    }
});

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