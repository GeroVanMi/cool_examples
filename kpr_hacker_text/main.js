const element = document.getElementById('cool-text');
const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const originalText = element.dataset['originalText'];

element.parentElement.addEventListener('mouseenter', handleEnter);
element.parentElement.addEventListener('mouseleave', handleLeave)

let interval;

function handleLeave() {
    const backgroundElement = element.parentElement.getElementsByClassName('background')[0];
    backgroundElement.style.animationName = "translateToRight";
}


function handleEnter() {
    const backgroundElement = element.parentElement.getElementsByClassName('background')[0];
    backgroundElement.style.animationName = "translateFromLeft";

    startAnimation();
}

function startAnimation() {
    if (interval != null) {
        return;
    }

    let counter = 0;

    interval = setInterval(() => {
        let letters = '';

        if (counter > originalText.length * 10) {
            clearInterval(interval);
            interval = null;
        }

        for (const letterIndex in originalText) {
            if (counter > letterIndex * 10) {
                letters += originalText.at(letterIndex);
            } else if(counter > letterIndex * 10 - 10) {
                letters += availableLetters.at(Math.floor(Math.random() * availableLetters.length))
            } else {
                letters += '                              ';
            }
        }
        element.textContent = letters;
        counter++;
    }, 8);

}
