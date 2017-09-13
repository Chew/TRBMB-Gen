function changeMessage() {
  for (var i = 0; i < 4; i++) {
    document.getElementById(i + "line").innerHTML = lines2[i][(Math.floor(Math.random() * lines2[i].length))];
  }
  document.getElementById("startBttn").textContent = "Again?";
}
