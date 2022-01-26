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
const music = new Audio("../audio/smw_coin.wav");

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
  if (key_code === 37) x -= diff;

  //top
  if (key_code === 38) y -= diff;

  //right
  if (key_code === 39) x += diff;

  //down
  if (key_code === 40) y += diff;

  // console.log(mario.getBoundingClientRect().bottom < window.innerHeight - imgH);

  //move mario
  if (
    mario.getBoundingClientRect().top > 0 &&
    mario.getBoundingClientRect().bottom < window.innerHeight
  ) {
    mario.style.top = y + "px";
  }
  if (
    mario.getBoundingClientRect().left > 0 &&
    mario.getBoundingClientRect().right < window.innerWidth
  ) {
    mario.style.left = x + "px";
  }

  if (isTouching(mario, coin)) {
    countNum++;
    scoreSpan.innerText = countNum;
    coinMoving();
    music.play();
  }
  music.pause();

  console.log(mario.offsetTop > 0);
  console.log(mario.getBoundingClientRect().top > 0);
}
