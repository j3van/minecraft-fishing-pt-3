// Functionize Minecraft Fishing Start Code

// HTML Vaiaables
let resulting = document.getElementById("result-img");

let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

let invCod = document.getElementById("inv-Cod");
let invSalmon = document.getElementById("inv-Salmon");
let invTrop = document.getElementById("inv-Tropical");
let invPuff = document.getElementById("inv-Pufferfish");

let plus5Btn = document.getElementById("plus5");
let till200Btn = document.getElementById("till200");
let letsFish = document.getElementById("fish-btn");
let sortTheFish = document.getElementById("sortFish");
let fishInv = document.getElementById("fish-inventory");
let userNum = document.getElementById("userFishNum");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
letsFish.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plusFive);
till200Btn.addEventListener("click", toTwoHunnid);
sortTheFish.addEventListener("click", sort);
userNum.addEventListener("change", userFish);
// Event Funstions

function fishOnce() {
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishInv.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishInv.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishInv.innerHTML += "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishInv.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishInv.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishInv.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishInv.innerHTML += "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishInv.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishInv.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishInv.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishInv.innerHTML += "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishInv.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  }
  console.log(numCod);
}

function userFish() {
  for (let a = 1; a <= +userNum.value; a++) {
    fishOnce();
  }
}

function plusFive() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function toTwoHunnid() {
  let codTarget = numCod + 200;

  while (numCod < codTarget) {
    fishOnce();
  }
}

function sort() {
  fishInv.innerHTML = "";

  invCod = 0;
  invSalmon = 0;
  invTrop = 0;
  invPuff = 0;

  // Cod
  for (numCod; numCod > invCod; invCod++) {
    fishInv.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
  }

  // Salmon
  for (numSalmon; numSalmon > invSalmon; invSalmon++) {
    fishInv.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
  }

  // Tropical
  for (numTropical; numTropical > invTrop; invTrop++) {
    fishInv.innerHTML += "<img src='img/Tropical-Fish.png' width='25px'>";
  }

  // Pufferfish
  for (numPuffer; numPuffer > invPuff; invPuff++) {
    fishInv.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
  }
}
