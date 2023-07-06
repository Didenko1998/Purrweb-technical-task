
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
let index = 0;
const sliderLine = document.querySelector('.slider__wrapper-container-line');
let ofLeft = 0;
let currentPosition = 0;
let access = true;
let slidesSize = 700;
let timerRight;
let timerLeft;
let timerLastRight;
let timerLastLeft;

document.querySelector(`.slider__button-left`).addEventListener('click', moveRight);
document.querySelector(`.slider__button-right`).addEventListener('click', moveLeft);

slides.forEach((itemSlide, indexSlide) => {
   if (indexSlide !== 0) {
       itemSlide.style.left = slidesSize + 'px';
   } else {
       itemSlide.style.left = 0 + 'px';
   }
})


function moveLeft() { 
   if (access) {
       if (index == slides.length - 1) { 
           access = false;
           currentPosition = 0;
           index = 0;
           timerLastLeft = setInterval(lastLeft, 3);

       } else {
           access = false;
           currentPosition = 0;
           timerLeft = setInterval(left, 3);
       }
   }
}

function moveRight() { 
    if (access) {
        if (index == 0) {  
            access = false;
            currentPosition = 0;
            index = slides.length - 1;
            timerLastRight = setInterval(lastRight, 3);

        } else {
            access = false;
            currentPosition = 0;
            timerRight = setInterval(right, 3);
        }
    }
}

function lastLeft() { 
    ofLeft = slidesSize; 

    if (currentPosition == ofLeft) {  
        clearInterval(timerLastLeft);
        access = true;
        index = 0;
    }
    else {
        incrementLeft(slides.length - 1, index);
        activeDot(index);
    }
}

function lastRight() { 
    ofLeft = slidesSize;

    if (currentPosition == ofLeft) {  
        clearInterval(timerLastRight);
        access = true;
        index = slides.length - 1;
    }
    else {
        incrementRight(0, slides.length - 1);
        activeDot(slides.length - 1);
    }
}

function left() { 
    ofLeft = slidesSize;

    if (currentPosition == ofLeft) {  
        index++;
        currentPosition = 0;
        clearInterval(timerLeft);
        access = true;
    }
    else {
        incrementLeft(index, index + 1);
        activeDot(index + 1);
    }
}

function right() { 
    ofLeft = slidesSize;

    if (currentPosition == ofLeft) { 
        index--;
        currentPosition = 0;
        clearInterval(timerRight);
        access = true;
    }
    else {
        incrementRight(index, index - 1);
        activeDot(index - 1);
    }
}

function incrementLeft(firstInd, secondInd) { 
    currentPosition = currentPosition + 5;
    slides[firstInd].style.left = (ofLeft - slidesSize) - currentPosition + 'px'; 
    slides[secondInd].style.left = ofLeft - currentPosition + 'px'; 
}

function incrementRight(firstInd, secondInd) { 
    currentPosition = currentPosition + 5;
    slides[firstInd].style.left = (ofLeft - slidesSize) + currentPosition + 'px'; 
    slides[secondInd].style.left = -ofLeft + currentPosition + 'px'; 
}

function activeDot(n) { 
    for (dot of dots) {
        dot.classList.remove('active'); 
    }
    dots[n].classList.add('active') 
}


function moveDotRight(ind, startPoint, endPoint, increment) {
    let timerDotRight = setInterval(() => {
            let slidesWay = Math.abs(startPoint) + Math.abs(endPoint);
            if (increment >= slidesWay) {  
                clearInterval(timerDotRight);
                access = true;
                index = ind;
            }
            else {
                increment = increment + 10;
                slides[ind].style.left = startPoint + increment + 'px';
            }
    }, 1);
}

function moveDotLeft(ind, startPoint, endPoint, increment) {

    let timerDotLeft = setInterval(() => {
        let slidesWay = Math.abs(startPoint) + Math.abs(endPoint);
        if (increment >= slidesWay) { 
            clearInterval(timerDotLeft);
            access = true;
            index = ind;
        }
        else {
            increment = increment + 10;
            slides[ind].style.left = startPoint - increment + 'px';
        }
    }, 1);
}

dots.forEach((itemD, indexDot) =>{ 
    itemD.addEventListener('click', () => {

        if (index > indexDot) {
            let counter = 0;
            moveDotRight(index, 0, slidesSize, 0, indexDot);
            index--;
            for (; index >= indexDot ; index--) {
                if (index === indexDot) {
                    counter++;
                    moveDotRight(index, -counter * slidesSize, 0, 0);
                } else {
                    counter++;
                    moveDotRight(index, -counter * slidesSize, slidesSize, 0);
                }
            }
            index = indexDot;
            activeDot(index);
        }

        if (index < indexDot) {
            let counter = 0;
            moveDotLeft(index, 0, -slidesSize, 0);
            index++;
            for (; index <= indexDot ; index++) {
                if (index === indexDot) {
                    counter++;
                    moveDotLeft(index, counter * slidesSize, 0, 0);
                } else {
                    counter++;
                    moveDotLeft(index, counter * slidesSize, -slidesSize, 0);
                }
            }
            index = indexDot;
            activeDot(index);
        }
    })
})







