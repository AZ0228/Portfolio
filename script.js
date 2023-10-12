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
    const topPosition = element.getBoundingClientRect().top;
    window.scroll({
        top: topPosition, 
        left: 0, 
        behavior: 'smooth' 
      });
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
    const scrollY = window.scrollY+300;
    const learnmore = qs('.learn-more');
    if(scrollY > elementTop){
        learnmore.style.opacity = 0;
    } else {
        learnmore.style.opacity = 1;
    }
}); 

function height(){
    let footer = qs('.footer');
    let footerBottom = footer.getBoundingClientRect().bottom;
    let contentWrapper = qs('#contentWrapper');
    contentWrapper.style.height = `${footerBottom}px`;
    setTimeout(() => {
        contentWrapper.style.overflow = 'hidden';    
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    setUpSmokeScreen();
    learnMoreAnimation();
    height();
    if(window.innerWidth>1000){
        window.addEventListener('resize', function(){
            height();
        });
    }
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