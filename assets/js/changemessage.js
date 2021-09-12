/**
 * Changes what's displayed on the main page.
 * That really _blank_ my _blank_.
 */
function changeMessage() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(i + "line").innerHTML = getRandomWord(lines2[i]);
    }
    document.getElementById("startBttn").textContent = "Again?";
}

/**
 * Gets a random word from the array
 * @param {String[]} array The array to get a word from
 * @returns {String} A word
 */
function getRandomWord(array) {
    return array[Math.floor(Math.random()*array.length)];
}