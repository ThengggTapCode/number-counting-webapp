const ui = document.getElementById('container');
const uiToggle = document.getElementsByClassName('switch-ui');
const toggleBtn = document.getElementById('ui-toggle')
const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset-btn');
let count = 0;

const updateCounter = (value) => {
    count = count + value;
    console.log(count);
    counter.textContent = count;
    if (count <= 0) {
        minusBtn.setAttribute('disabled', true);
    } else {
        minusBtn.removeAttribute('disabled', false);
    }
}
plusBtn.addEventListener('click', () => {
    updateCounter(1);
});

minusBtn.addEventListener('click', () => {
    updateCounter(-1);
});

resetBtn.addEventListener('click', () => {
    updateCounter(-(count));
});

minusBtn.addEventListener('mouseover', () => {
    if (minusBtn.hasAttribute('disabled')) {
        minusBtn.style.cursor = 'not-allowed';
    }
    else {
        minusBtn.style.cursor = 'pointer';
    }
});

for (const uiT of uiToggle) {
    uiT.addEventListener('click', () => {
        ui.classList.toggle('dark-mode');

        if (ui.classList.contains('dark-mode')) {
            toggleBtn.classList.replace('fa-moon', 'fa-sun');
        } else {
            toggleBtn.classList.replace('fa-sun', 'fa-moon')
        }
    });
}
