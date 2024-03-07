const cells = document.querySelectorAll(".game-cell");
const resetButton = document.getElementById("resetButton");

// Add game logic here

resetButton.addEventListener("click", function() {
    // Reset the game board
    cells.forEach(cell => cell.textContent = "");
});
