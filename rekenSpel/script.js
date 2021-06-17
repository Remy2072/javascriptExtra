let getalA, getalB, antwoord, jouwAntwoord;

const opgaveblad = document.getElementById("opgaveblad");
const input1 = document.getElementById("input1");
const execButton = document.getElementById("execButton");
const container = document.getElementById("container");

maakOpgave();

function maakOpgave() {
  getalA = Math.floor(Math.random() * 10) + 1;
  getalB = Math.floor(Math.random() * 10) + 1;
  antwoord = getalA * getalB;
  opgaveblad.innerHTML = getalA + " x " + getalB;
}

execButton.addEventListener("click", checkAntwoord);

function checkAntwoord() {
  jouwAntwoord = input1.value;
  if (antwoord == jouwAntwoord) {
    goedFout = true;
    container.style.background = "lightgreen";
  } else {
    goedFout = false;
    container.style.background = "crimson";
  }
  setTimeout(wachten, 2000);
}

function wachten() {
  container.style.background = "white";
  input1.value = "";
  input1.focus();
  maakOpgave();
}
