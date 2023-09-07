function learnMore(){
    const about = qs('.about');
    const learnmore = id('learn-more');
    console.log(learnmore);     
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    setTimeout(() => {
        learnmore.classList.add('hidden');
    }, 1000);
}

function learnMoreAnimation(){
    const learnmore = id('learn-more');
    learnmore.addEventListener('mouseover', function(){
        const learnmoreimg = learnmore.querySelector('img');
        setTimeout(() => {
            learnmoreimg.src = "assets/chevron-down-glow.svg";            
        }, 100);
    });
    learnmore.addEventListener('mouseleave', function(){
        const learnmoreimg = learnmore.querySelector('img');
        learnmoreimg.src = "assets/chevron-down.svg";
    });
}

function setUpSmokeScreen(){
    const windowtop = window.scrollY;
    const smokescreen  = qs('.smokescreen');
    smokescreen.style.transform = `translateY(${windowtop}px)`;
    smokescreen.classList.add('hidden');
    setTimeout(() => {
        smokescreen.style.display = 'none';
    }, 0);

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
    setUpSmokeScreen();
    learnMoreAnimation();
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