function scrollto(elem){
    const element = qs(elem);
    const topPosition = element.getBoundingClientRect().top;
    window.scroll({
        top: topPosition, 
        left: 0, 
        behavior: 'smooth' 
      });
}

function getCumulativeOffset(element) {
    let height = 0;
    while(element) {
        height += element.offsetTop;
        element = element.offsetParent;
    }
    return height;
}

function height(){
    let footer = qs('.footer');
    let footerBottom = footer.offsetTop + footer.offsetHeight;
    let contentWrapper = qs('#contentWrapper');
    contentWrapper.style.height = `${footerBottom}px`;
    setTimeout(() => {
        contentWrapper.style.overflow = 'hidden';    
    }, 100);
}

function main(){
    height();
    if(window.innerWidth>1000){
        window.addEventListener('resize', function(){
            height();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    main();
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