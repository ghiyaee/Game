const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
const gameover = document.querySelector("#gameover");
const curent = document.querySelector("#qustionbox");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
let scor = document.querySelector("#check");
const current = document.querySelector("#curent");
const tryagen = document.querySelector("#tryagen");
const scr = document.querySelector("#scr");
const show_answer = document.querySelector("#btn_answer");
const gameStart = document.querySelector("#gamestart");
const score = document.querySelector("#score");
console.log(score);
start.addEventListener("click", action);
box1.addEventListener("click", answer1);
box2.addEventListener("click", answer2);
box3.addEventListener("click", answer3);
box4.addEventListener("click", answer4);
show_answer.addEventListener("click", show);

let counte;
time = [60, 0];

let num1 = 0;
let num2 = 0;
let num3 = 0;
let box = 0;
let vaild = true;
let btn = 0;

function settime() {
  if ((time[1] += 10) == 1000) {
    time[1] = 0;
    time[0]--;
  } else if (time[0] <= 0) {
    clearInterval(counte);
    gameover.style.display = "block";
    scr.innerHTML = scor.innerHTML;
    // start.innerHTML = "New Game";
    setTimeout(() => {
      location.reload();
    }, 6000);
  }

  timer.innerHTML = `StartTimer:${time[0]}sec`;
}

function action() {
  set();
  btn = 0;
  show_answer.style.display = "block";
  timer.style.display = "block";
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  curent.innerHTML = `${num1}x${num2}`;
  num3 = num1 * num2;
  box = Math.floor((Math.random() + 1) * 4 - 3);
  start.innerHTML = "Reset Boxs";
  if (box == 1) {
    box1.innerHTML = num1 * num2;
    box2.innerHTML = Math.floor(Math.random() * 100);
    box3.innerHTML = Math.floor(Math.random() * 100);
    box4.innerHTML = Math.floor(Math.random() * 100);
  }
  if (box == 2) {
    box2.innerHTML = num1 * num2;
    box1.innerHTML = Math.floor(Math.random() * 100);
    box3.innerHTML = Math.floor(Math.random() * 100);
    box4.innerHTML = Math.floor(Math.random() * 100);
  }
  if (box == 3) {
    box3.innerHTML = num1 * num2;
    box1.innerHTML = Math.floor(Math.random() * 100);
    box2.innerHTML = Math.floor(Math.random() * 100);
    box4.innerHTML = Math.floor(Math.random() * 100);
  }
  if (box == 4) {
    box4.innerHTML = num1 * num2;
    box1.innerHTML = Math.floor(Math.random() * 100);
    box2.innerHTML = Math.floor(Math.random() * 100);
    box3.innerHTML = Math.floor(Math.random() * 100);
  }
}

function set() {
  console.log(time[0]);
  if (vaild == true && time[0] == 60) {
    counte = setInterval(settime, 10);
    vaild = false;
  } else {
    vaild = true;
  }
}

function answer1() {
  if (box1.textContent == "") {
    gameStart.style.display = "block";
    setTimeout(() => {
      gameStart.style.display = "none";
    }, 2500);
  } else {
    if (box1.textContent == num3) {
      +scor.innerHTML++;
      box1.textContent = "ok";
      current.style.display = "block";
      setTimeout(() => {
        current.style.display = "none";
      }, 2500);
    } else {
      tryagen.style.display = "block";
      setTimeout(() => {
        tryagen.style.display = "none";
      }, 2500);
    }
  }
}
function answer2() {
  if (box2.textContent == "") {
    gameStart.style.display = "block";
    setTimeout(() => {
      gameStart.style.display = "none";
    }, 2500);
  } else {
    if (box2.textContent == num3) {
      +scor.innerHTML++;
      box2.textContent = "ok";
      current.style.display = "block";
      setTimeout(() => {
        current.style.display = "none";
      }, 2500);
    } else {
      tryagen.style.display = "block";
      setTimeout(() => {
        tryagen.style.display = "none";
      }, 2500);
    }
  }
}
function answer3() {
  if (box3.textContent == "") {
    gameStart.style.display = "block";
    setTimeout(() => {
      gameStart.style.display = "none";
    }, 2500);
  } else {
    if (box3.textContent == num3) {
      +scor.innerHTML++;
      box3.textContent = "ok";
      current.style.display = "block";
      setTimeout(() => {
        current.style.display = "none";
      }, 2500);
    } else {
      tryagen.style.display = "block";
      setTimeout(() => {
        tryagen.style.display = "none";
      }, 2500);
    }
  }
}
function answer4() {
  if (box4.textContent == "") {
    gameStart.style.display = "block";
    setTimeout(() => {
      gameStart.style.display = "none";
    }, 1500);
  } else {
    if (box4.textContent == num3) {
      +scor.innerHTML++;
      box4.textContent = "ok";
      current.style.display = "block";
      setTimeout(() => {
        current.style.display = "none";
      }, 1000);
    } else {
      tryagen.style.display = "block";
      setTimeout(() => {
        tryagen.style.display = "none";
      }, 1000);
    }
  }
}
function show() {
  if (
    box1.textContent == "ok" ||
    box2.textContent == "ok" ||
    box3.textContent == "ok" ||
    box4.textContent == "ok"
  ) {
  } else {
    if (btn == 0) {
      curent.innerHTML = num3;
      -scor.innerHTML--;
      score.style.backgroundColor = "red";
      setTimeout(
        () => (score.style.backgroundColor = `rgb(250,250,139)`),
        1000
      );
      box1.textContent = "";
      box2.textContent = "";
      box3.textContent = "";
      box4.textContent = "";
      show_answer.style.color = "white";
      show_answer.innerHTML = "Sarry one score low";
      setTimeout(() => {
        show_answer.style.color = "white";
        show_answer.innerHTML = "press and answer correct";
      }, 2500);
      btn = 1;
    }
  }
}
