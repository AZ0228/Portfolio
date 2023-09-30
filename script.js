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

function getCumulativeOffset(element) {
    let height = 0;
    while(element) {
        height += element.offsetTop;
        element = element.offsetParent;
    }
    return height;
}

const scroll = id('contentWrapper');
scroll.addEventListener('scroll', function() {
    if(window.innerWidth<=1000){
        return;
    }
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

    const projects = qs('.projects');
    const projectHeight = projects.getBoundingClientRect().top;
    const height = getCumulativeOffset(projects);
    const header = qs('header');
    if(scrollY > projectHeight-30){
        console.log('fixed');
        header.style.position = 'absolute';
        header.style.top = `${height-30}px`;
        header.style.transition = 'none';
    } else {
        header.style.position = 'fixed';
        header.style.top = "0px";
    }

}, { passive: false });

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