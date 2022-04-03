let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)
let currentPlayer = "X"

let WinningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7]
]

function checkForWinner() {
    WinningCombination.forEach(function(combination) {
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if (check) {
            highlightCells(combination)
        }
    })
}

function highlightCells(combination) {
    combination.forEach(function(idx) {
        cells[idx].classList.add("highlight")
    })
}

cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if (cell.innerText.trim() != "") return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})