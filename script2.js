const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

currentActive = 0;

next.addEventListener('click', () => {
    if(currentActive < circles.length - 1) {
        currentActive++;
    }

    update();
})

prev.addEventListener('click', () => {
    if(currentActive > 0) {
        currentActive--;
    }

    update();
})

function update() {

    circles.forEach((circle,index) => {
        if(index <= currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    progress.style.width = (100 * (currentActive/(circles.length-1))) + '%';

    // botões
    if(currentActive === 0) {
        prev.disabled = true;
    } else if(currentActive === circles.length - 1) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}