const  dogImage = document.getElementById('dogImage');
const  dogBtn = document.getElementById('newDogBtn');
function getNewDog (){
	fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(json =>  dogImage.innerHTML = `<img src='${json.message}' height=500 width=500>`);
}

dogBtn.onclick = () =>  getNewDog();