let words;
let lines2;

fetch('../assets/json/words.json').then(response => response.json()).then(data => {
    words = data;
    lines2 = [
        ["That really"],
        words["word1"], ["my"],
        words["word2"],
    ];
});
