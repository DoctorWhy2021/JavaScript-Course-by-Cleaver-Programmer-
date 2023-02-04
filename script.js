let title = document.getElementById('title');
title.innerText = 'Goodbye';
title.style.color = 'red';

//Work with onclick

//const redSqr = document.getElementById('red');
//const yellowSqr = document.getElementById('yellow');
//const greenSqr = document.getElementById('green');

//redSqr.onclick =  () => console.log('red');
//yellowSqr.onclick = () => console.log('yellow');
//greenSqr.onclick = () => console.log('green');

const squares = document.querySelectorAll('.colorSquare');
let timesClicked = { 'red' : 0, 'yellow' : 0, 'green' : 0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value]++;
        square.innerText = timesClicked[square.value];
    };
});

const  clearGameBtn = document.getElementById('clrGame');
clearGameBtn.onclick = () => clearScores();


function clearScores(){
    squares.forEach(square => {
        timesClicked[square.value] = 0;
        square.innerText = '';});
}
