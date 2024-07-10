const bg = document.querySelector('.bg');
const loadNum = document.querySelector('.loading-number');

let load = 0;

let num = setInterval(bgBlurring, 30);

function bgBlurring() {
    load++;

    if(load > 99) {
        clearInterval(num);
    }

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

    loadNum.innerHTML = `${load}%`;
    loadNum.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}