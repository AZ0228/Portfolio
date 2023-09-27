const textElement = document.getElementById('text');
const caretElement = document.getElementById('caret');

let textToType = "hello, i'm james";
let mistypedText = "hello, i'm jsmes";
let isTyping = false;
let typing = mistypedText;
let index = 0;
let isMistyping = true;
let isCorrecting = false;
let caretInterval;

let interval;
let caretVisible = true;

//intervals
let mistypeWaiting = 6;
let clear = 2400;

function moveCaret() {
    caretElement.style.left = (textElement.offsetWidth+4) + 'px';
}

function toggleCaret() {
    if (!isTyping) {
      if (caretElement.style.backgroundColor === 'rgb(248, 248, 248)') {
        caretElement.style.backgroundColor = 'transparent';
        caretElement.style.boxShadow = 'none';
        console.log(caretElement.style.boxShadow);
        caretVisible = false;
      } else {
        caretElement.style.backgroundColor = 'rgb(248, 248, 248)';
        caretElement.style.boxShadow = '0 0 5px rgb(248, 248, 248)';
        caretVisible = true;
      }
    }
  }


function type(){
    if(!isCorrecting){
        if(index < typing.length){
            if(caretVisible == false){
                return;
            }
            isTyping = true;
            textElement.innerHTML += typing[index];
            index++;
            moveCaret();
        }
        else{
            if(typing === textToType){
                isTyping = false;
                setTimeout(() => {
                    caretElement.style.display = 'none';
                    clearInterval(caretInterval);

                    clearInterval(interval);
                }, clear);   
                setTimeout(() => {                  
                    startAnimation();
                }, 300); 
            }
            else {
                if(mistypeWaiting == 0 && caretVisible==true){
                    isCorrecting = true;
                    isTyping = true;
                } else {
                    if(mistypeWaiting != 0){
                        mistypeWaiting--;
                    }
                    isTyping = false;

                }
            }
        }    
    } else {
        typing = textToType;
        if(textElement.innerHTML == typing.slice(0,textElement.innerHTML.length)){
            isCorrecting = false;
        } else {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            index--;
            moveCaret();
            console.log('correcting')
        }
    }
}

caretInterval = setInterval(toggleCaret, 400);
setTimeout(() => {
    interval = setInterval(type, 75);
}, 2700);

document.addEventListener('keypress', function(event) {
    // The 'event' object contains information about the keypress event
    mistypeWaiting = 6;
    clear = 100;
    interval = setInterval(type, 30);
    caretInterval = setInterval(toggleCaret, 80);
  });

