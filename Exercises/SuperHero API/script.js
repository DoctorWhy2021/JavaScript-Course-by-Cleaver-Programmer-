const BASE_URL = "https://superheroapi.com/api.php/3433025083684557"
const getHeroBtn = document.getElementById('getHeroBtn')
const getRandomHeroBtn = document.getElementById('getRandomHeroBtn')
const heroImg = document.getElementById('heroImg')
const searchBox = document.getElementById('searchTextBox')
const hero = document.getElementById('hero')
let Img = ""

const getSuperHero =  (id) => {
	hero.innerHTML = ""
	fetch(`${BASE_URL}/${id}`)
	.then(response => response.json())
	.then(json => {
		Img = json.image.url
		heroImg.src = Img
		hero.innerHTML += `<h2>${json.name}</h2>`
		hero.innerHTML += `<p>Intelligence: ${json.powerstats.intelligence}</p>`
		hero.innerHTML += `<p>Strength: ${json.powerstats.strength}</p>`
		hero.innerHTML += `<p>Speed: ${json.powerstats.speed}</p>`
		hero.innerHTML += `<p>Durability: ${json.powerstats.durability}</p>`
		hero.innerHTML += `<p>Power: ${json.powerstats.power}</p>`
		hero.innerHTML += `<p>Combat: ${json.powerstats.combat}</p>`})
}

const getSuperHeroByName = (name) => {
	hero.innerHTML = ""
	fetch(`${BASE_URL}/search/${name}`)
	.then(response => response.json())
	.then(json => {
		Img = json.results[0].image.url;
		heroImg.src = Img
		hero.innerHTML += `<h2>${json.results[0].name}</h2>`
		hero.innerHTML += `<p>Intelligence: ${json.results[0].powerstats.intelligence}</p>`
		hero.innerHTML += `<p>Strength: ${json.results[0].powerstats.strength}</p>`
		hero.innerHTML += `<p>Speed: ${json.results[0].powerstats.speed}</p>`
		hero.innerHTML += `<p>Durability: ${json.results[0].powerstats.durability}</p>`
		hero.innerHTML += `<p>Power: ${json.results[0].powerstats.power}</p>`
		hero.innerHTML += `<p>Combat: ${json.results[0].powerstats.combat}</p>`
	})
}
const randomHero = () =>{
	const numberOfHeroes = 731
	return Math.floor(Math.random()* numberOfHeroes) + 1
}
getRandomHeroBtn.onclick = () => getSuperHero(randomHero())
getHeroBtn.onclick = () => getSuperHeroByName(searchBox.value.toLocaleLowerCase())