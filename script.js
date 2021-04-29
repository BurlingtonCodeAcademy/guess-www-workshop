let dispArea = document.getElementById('display')

function randomInt(min, max) {
  let range = max - min + 1

  return Math.floor(Math.random() * range) + min
}
