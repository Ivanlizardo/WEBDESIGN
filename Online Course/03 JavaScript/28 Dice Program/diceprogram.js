function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    values.push(randomNum);
    images.push(`<img src = "dice_png/${randomNum}.png">`);
  }

  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join(" ");
}
