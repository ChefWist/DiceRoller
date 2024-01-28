
function rollDice(){
	const numofDice = document.getElementById("#Dice").value;
	const diceResult = document.getElementById("diceResult");
	const diceImages = document.getElementById("diceimages");
	const values = [];
	const Images = [];
	for(let i = 0; i<numofDice; i++){
		const value = Math.floor(Math.random() * 6) + 1
		values.push(value);
		Images.push(`<img src="Images/${value}.png" width="50" alt="Dice">`)
	}
	diceResult.textContent = `Dice: ${values.join(", ")}`
	diceImages.innerHTML = Images.join("")
}