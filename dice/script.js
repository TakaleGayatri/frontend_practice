function rollDice() {
  const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
  ];

  let rolls = [];
  for (let i = 1; i <= 3; i++) {
    let roll = Math.floor(Math.random() * 6);
    document.getElementById("dice" + i).src = diceImages[roll];
    rolls.push(roll + 1);
  }

  let maxRoll = Math.max(...rolls);
  let winners = rolls.map((r, i) => r === maxRoll ? `Player ${i+1}` : null).filter(x => x);

  document.getElementById("winner").textContent = winners.length > 1 
    ? "It's a tie between " + winners.join(" & ") + "!" 
    : winners[0] + " wins!";
}
