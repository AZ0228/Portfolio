const canvas = id('canvas');
const ctx = canvas.getContext('2d');
const img = id('bg2');
const imgOverlay = new Image();
const body = qs('.content-container');

imgOverlay.src = "assets/bg1.svg";





function setupCanvas() {
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;

    // Draw the initial overlay image
    ctx.drawImage(imgOverlay, 0, 0, canvas.width, canvas.height);
}


if(window.innerWidth < 800) {
    imgOverlay.addEventListener('load', function() {
        // Update canvas when the overlay image is fully loaded
        setupCanvas();
    });
    // Update canvas size when the main image is fully loaded
    img.addEventListener('load', setupCanvas);
    window.addEventListener('resize', setupCanvas);
    // Mouse move event
    body.addEventListener('mousemove', function(event) {
        // Forward the event to the bottom element
        let eventClone = new MouseEvent('mousemove', event);
        canvas.dispatchEvent(eventClone);
    });
    canvas.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        // Clear the canvas to make the underlying image fully visible
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw the overlay image again
        ctx.drawImage(imgOverlay, 0, 0, canvas.width, canvas.height);
    
        // Change the composite operation to "destination-out"
        ctx.globalCompositeOperation = "destination-out";
    
        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 150);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
        // Draw the gradient circle
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 150, 0, 2 * Math.PI);
        ctx.fill();
    
        // Reset the composite operation to default
        ctx.globalCompositeOperation = "source-over";
    });

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