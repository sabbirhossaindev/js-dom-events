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

// option: 3.... another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4 ....
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePin); // ('ja add korbo', function call);

function makePin() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4.....another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option: 4..... final ..important..
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
});