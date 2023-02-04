let title = document.getElementById('title');
title.innerText = 'Goodbye';
title.style.color = 'red';

//Work with onclick

const redSqr = document.getElementById('red');
const yellowSqr = document.getElementById('yellow');
const greenSqr = document.getElementById('green');

redSqr.onclick =  () => console.log('red');
yellowSqr.onclick = () => console.log('yellow');
greenSqr.onclick = () => console.log('green');
