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
let mistypeWaiting = 6;
let caretVisible = true;

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
                }, 2400);   
                setTimeout(() => {                  
                    startAnimation();
                }, 500); 
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

caretInterval = setInterval(toggleCaret, 500);
setTimeout(() => {
    const interval = setInterval(type, 100);
}, 2700);

