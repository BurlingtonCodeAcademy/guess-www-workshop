let dispArea = document.getElementById("display");

function randomInt(min, max) {
  let range = max - min + 1;

  return Math.floor(Math.random() * range) + min;
}

let high = 100;
let low = 1;
let number = randomInt(low, high);
let guess = prompt("Is your number: " + number);

while (guess !== "yes") {
  let highLow = prompt("Is your number higher, or lower. Please enter h or l");

  if (highLow === "h") {
    low = number + 1;
    number = randomInt(low, high);
    guess = prompt("Is your number: " + number);
  } else if (highLow === "l") {
    high = number - 1;
    number = randomInt(low, high);
    guess = prompt("Is your number: " + number);
  }
}

let h3 = document.createElement('h3')
let button = document.createElement('button')

h3.textContent = "I win!"
button.textContent = "Play again?"

button.addEventListener("click", function(evt) {
  window.location.reload()
})

dispArea.appendChild(h3)
dispArea.appendChild(button)
