//Async
//const waitingForSoup = () => console.log('soup')
//console.log('You start the convo with your friend')
//setTimeout(waitingForSoup, 2000)
//console.log('Still speaking')

//const orderSoup = () => console.log('soup is ready')
//setTimeout(orderSoup, 2000)
//console.log('still speaking')

//Promises

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		isReady = [true,false][Math.floor(Math.random() * 2)]
		isReady ? resolve('soup is ready') : reject('No soup today')
		}, 1000)
})
//
//console.log(promise1.then(value => console.log(value))
//.catch(value => console.log(value)))

//console.log(
//		fetch('https://dog.ceo/api/breeds/image/random') //promise
//		.then(response => response.json()) //promise
//		.then(json => console.log(json))) //message

//ASYNC AWAIT

//const getDog = async () => {
//	const url = 'https://dog.ceo/api/breeds/image/random'
//	const response = await fetch(url)
//	const data = await response.json()
//	console.log(data)
//}
//
//getDog()

const getSoup = async () => {
	try {
		const soup = await promise1
		console.log(soup)
    }catch (e){
		console.log(e)
	}
}

getSoup()