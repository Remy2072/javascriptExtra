let getalA, getalB, antwoord, jouwAntwoord;

const opgaveblad = document.getElementById("opgaveblad");
const input1 = document.getElementById("input1");
const execButton = document.getElementById("execButton");
const container = document.getElementById("container");
foutshow = document.getElementById("showfout");
goedshow = document.getElementById("showgoed");
let fout = 0;
let goed = 0;

maakOpgave();

function maakOpgave() {
  getalA = Math.floor(Math.random() * 10) + 1;
  getalB = Math.floor(Math.random() * 10) + 1;
  antwoord = getalA * getalB;
  opgaveblad.innerHTML = getalA + " x " + getalB;
}

// execButton.addEventListener("click", checkAntwoord);

input1.addEventListener("keydown", checkAntwoord);

function checkAntwoord(evt) {
  if (evt.key == "Enter") {
    jouwAntwoord = input1.value;
    if (antwoord == jouwAntwoord) {
      goedFout = true;
      goed += 1;
      goedshow.innerHTML = "Goed: " + goed;
      container.style.background = "lightgreen";
    } else {
      goedFout = false;
      fout += 1;
      foutshow.innerHTML = "Fout: " + fout;
      container.style.background = "crimson";
    }
    setTimeout(wachten, 2000);
  }
}

function wachten() {
  container.style.background = "white";
  input1.value = "";
  input1.focus();
  maakOpgave();
}
