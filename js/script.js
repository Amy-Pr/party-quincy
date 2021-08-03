var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
//console.log(fans);

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

var lightSwitch = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var profileName = document.querySelector("h1");
var backLight = document.querySelector("body");

lightSwitch.addEventListener("click", function () {
  if (backLight.classList.contains("light")) {
    backLight.classList.remove("light");
    ball.classList.remove("move-right");
    profileName.innerText = "Stealth Quincy";
  } else {
    backLight.classList.add("light");
    ball.classList.add("move-right");
    profileName.innerText = "Party Qunicy";
  }
});
