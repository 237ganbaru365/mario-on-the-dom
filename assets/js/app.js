function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const imgH = 100;
const imgW = 100;

//moving randomly
function coinMoving() {
  const height = Math.floor(Math.random() * (window.innerHeight - imgH));
  const width = Math.floor(Math.random() * (window.innerWidth - imgW));

  return (coin.style.left = `${width}px`), (coin.style.top = `${height}px`);
}

//get element of mario, coin
const mario = document.getElementById("avatar");
const coin = document.getElementById("coin");

//create audio effect
const music = new Audio("/smw_coin.wav");

//score count
const scoreTitle = document.getElementById("score");
const scoreSpan = document.createElement("span");
let countNum = 0;
scoreSpan.innerText = countNum;
scoreTitle.appendChild(scoreSpan);

//addeventlistner
window.addEventListener("keydown", keydown);

//set position
let x = 100;
let y = 100;

function keydown(event) {
  //get key number
  let key_code = event.keyCode;

  //set moving　amount
  let diff = 30;

  //left
  if (key_code === 37) {
    if (x > 0) {
      x -= diff;
      mario.style.left = x + "px";
      mario.style.transform = "scaleX(-1)";
    }
  }

  //top
  if (key_code === 38) {
    if (y > 0) {
      y -= diff;
      mario.style.top = y + "px";
    }
  }

  //right
  if (key_code === 39) {
    if (x < window.innerWidth - imgW) {
      x += diff;
      mario.style.left = x + "px";
      mario.style.transform = "scaleX(1)";
    }
  }

  //down
  if (key_code === 40) {
    if (y < window.innerHeight - imgH) {
      y += diff;
      mario.style.top = y + "px";
    }
  }

  if (isTouching(mario, coin)) {
    countNum++;
    scoreSpan.innerText = countNum;
    coinMoving();
    music.play();
  }
}
