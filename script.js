function learnMoreAnimation(){
    const learnmore = qs('.learn-more');
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

function scrollto(elem){
    const element = qs(elem);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function setUpSmokeScreen(){
    const windowtop = window.scrollY;
    const smokescreen  = qs('.smokescreen');
    smokescreen.style.transform = `translateY(${windowtop}px)`;
    setTimeout(() => {
            smokescreen.classList.add('hidden');
    }, 100);    
    setTimeout(() => {
        smokescreen.style.display = 'none';
    }, 2000);

}

function startAnimation(){
    let gone = qsa('.gone');
    for(let item of gone){
        item.classList.remove('gone');
        item.classList.add('appear');
        setTimeout(() => {
            item.style.opacity = 1;
        }, 500);
    }
}

window.addEventListener('scroll', function() {
    const elementTop = qs('.about').getBoundingClientRect().top;
    const scrollY = window.scrollY;
    const learnmore = qs('.learn-more');
    if(scrollY < elementTop){
        learnmore.classList.remove('hidden');
    } else {
        if(!learnmore.classList.contains('hidden')){
            learnmore.classList.add('hidden');
        }
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