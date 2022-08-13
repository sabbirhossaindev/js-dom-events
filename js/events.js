// option: 1.....
// <button onclick="console.log(99)">Hire Me</button>

// option: 2....
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// makeRed();

// option: 3....
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option: 4...
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
