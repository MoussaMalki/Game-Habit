let doc = document;
let log = console.log;

/// =====> Setting Up the time

let today = new Date().toLocaleDateString().slice(0, 4);

doc.querySelector(`.today-date`).textContent = `${today}`;

/// =======================> I - Tasks section <============================ ///

/// =====> 1. Adding tasks

let coinsInput = doc.querySelector(`.add-coins-input`);
let taskInput = doc.querySelector(`.add-task-input`);
let addTaskBtn = doc.querySelector(`#add-btn`);

let coinsInput2 = doc.querySelector(`.add-coins2-input`);
let taskInput2 = doc.querySelector(`.add-item-input`);
let addTaskBtn2 = doc.querySelector(`#add-btn2`);

const pattern = /[1-9]/; // a regular expression to search for a numbers pattern
const pattern2 = /[a-z]/;

window.taskInputValue = `my task`;
window.coinInputValue = `10`;

window.taskInputValue2 = `my item`;
window.coinInputValue2 = `10`;

coinsInput.onblur = () => {
  window.coinInputValue = coinsInput.value;

  if (pattern.test(coinInputValue) === false) {
    window.coinInputValue = `10`;
  }
};
taskInput.onblur = () => {
  window.taskInputValue = taskInput.value;

  if (pattern2.test(taskInputValue) === false) {
    window.taskInputValue = `my task`;
  }
};
addTaskBtn.onclick = () => {
  let taskDiv = doc.createElement(`div`);
  let taskH4 = doc.createElement(`h4`);
  let taskText = doc.createTextNode(`${taskInputValue}`);
  let checkBox = doc.createElement(`i`);
  let deleteBox = doc.createElement(`i`);
  let coinCount = doc.createElement(`span`);
  let coinSpan = doc.createElement(`span`);
  let coinCountText = doc.createTextNode(`${coinInputValue}`);
  let coinImg = doc.createElement(`img`);
  coinImg.setAttribute(`src`, `images/Coin.png`);

  checkBox.className = `bx bx-check-circle`;
  deleteBox.className = `bx bx-x-circle`;
  checkBox.id = `checkBox`;
  deleteBox.id = `deleteBox`;
  coinSpan.id = `coinCount`;
  coinCount.id = `coinDiv`;

  coinSpan.appendChild(coinCountText);
  coinCount.appendChild(coinSpan);
  coinCount.appendChild(coinImg);
  taskH4.appendChild(taskText);
  taskDiv.appendChild(taskH4);
  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(deleteBox);
  taskDiv.appendChild(coinCount);
  doc.querySelector(`.added-tasks`).appendChild(taskDiv);

  deleteAndAdd();
};

function deleteAndAdd() {
  setTimeout(() => {
    doc.querySelectorAll(`#deleteBox`).forEach((el) => {
      el.addEventListener(`click`, () => {
        el.parentElement.remove();
      });
    });
    window.acc = 0;
    doc.querySelectorAll(`#checkBox`).forEach((el) => {
      el.addEventListener(`click`, () => {
        el.parentElement.style.cssText = `background-color: #2C3333; color: #fff`;
        el.parentElement.childNodes[0].style.cssText = `text-decoration: line-through;`;
        el.parentElement.childNodes[3].style.cssText = `text-decoration: line-through;`;

        acc += 1;

        if (acc === 1 && el.parentElement.getAttribute(`coin`) !== `added`) {
          let addCoin = el.parentElement.childNodes[3].innerText;
          el.parentElement.setAttribute(`coin`, `added`);

          log(addCoin);
          doc.querySelector(`.coin-count`).innerText =
            parseInt(doc.querySelector(`.coin-count`).innerText) +
            parseInt(addCoin);

          setTimeout(() => {
            window.acc = 0;
          }, 50);
        }
      });
    });
  }, 10);
}

let tasksNav = doc.querySelector(`#Tasks`);
let storeNav = doc.querySelector(`#Store`);
let trackNav = doc.querySelector(`#Track`);

let taskSection = doc.querySelector(`#Tasks-Div`);
let storeSection = doc.querySelector(`#Store-Div`);
let trackSection = doc.querySelector(`#Track-Div`);

tasksNav.onclick = () => {
  taskSection.style.cssText = `display: flex;`;
  storeSection.style.cssText = `display: none;`;
  trackSection.style.cssText = `display: none;`;
  tasksNav.style.cssText = ` background-color: #0096FF`;
  storeNav.style.cssText = ` background-color: #2C3333`;
  trackNav.style.cssText = ` background-color: #2C3333`;
  doc.querySelector(`.gift-div`).style.cssText = `display: none`;
};
storeNav.onclick = () => {
  taskSection.style.cssText = `display: none`;
  trackSection.style.cssText = `display: none`;
  storeSection.style.cssText = `display: flex;`;
  tasksNav.style.cssText = ` background-color: #2C3333`;
  trackNav.style.cssText = ` background-color: #2C3333`;
  storeNav.style.cssText = ` background-color: #0096FF`;
  doc.querySelector(`.gift-div`).style.cssText = `display: none`;
};
trackNav.onclick = () => {
  taskSection.style.cssText = `display: none`;
  storeSection.style.cssText = `display: none;`;
  trackSection.style.cssText = `display: flex;`;
  tasksNav.style.cssText = ` background-color: #2C3333`;
  trackNav.style.cssText = ` background-color: #0096FF`;
  storeNav.style.cssText = ` background-color: #2C3333`;
};

coinsInput2.onblur = () => {
  window.coinInputValue2 = coinsInput2.value;

  if (pattern.test(coinInputValue2) === false) {
    window.coinInputValue2 = `10`;
  }
};
taskInput2.onblur = () => {
  window.taskInputValue2 = taskInput2.value;

  if (pattern2.test(taskInputValue2) === false) {
    window.taskInputValue2 = `my item`;
  }
};
addTaskBtn2.onclick = () => {
  let taskDiv = doc.createElement(`div`);
  let taskH4 = doc.createElement(`h4`);
  let taskText = doc.createTextNode(`${taskInputValue2}`);
  let buyBox = doc.createElement(`i`);
  let deleteBox = doc.createElement(`i`);
  let coinCount = doc.createElement(`span`);
  let coinSpan = doc.createElement(`span`);
  let coinCountText = doc.createTextNode(`${coinInputValue2}`);
  let coinImg = doc.createElement(`img`);
  coinImg.setAttribute(`src`, `images/Coin.png`);

  buyBox.className = `bx bx-cart-add`;
  deleteBox.className = `bx bx-x-circle`;
  buyBox.id = `buyBox`;
  deleteBox.id = `deleteBox2`;
  coinSpan.id = `coinCount2`;
  coinCount.id = `coinDiv2`;

  coinSpan.appendChild(coinCountText);
  coinCount.appendChild(coinSpan);
  coinCount.appendChild(coinImg);
  taskH4.appendChild(taskText);
  taskDiv.appendChild(taskH4);
  taskDiv.appendChild(buyBox);
  taskDiv.appendChild(deleteBox);
  taskDiv.appendChild(coinCount);
  doc.querySelector(`.added-tasks2`).appendChild(taskDiv);

  deleteAndAdd2();
};

function deleteAndAdd2() {
  setTimeout(() => {
    doc.querySelectorAll(`#deleteBox2`).forEach((el) => {
      el.addEventListener(`click`, () => {
        el.parentElement.remove();
      });
    });

    doc.querySelectorAll(`#buyBox`).forEach((el) => {
      el.addEventListener(`click`, () => {
        acc += 1;

        if (acc === 1 && el.parentElement.getAttribute(`coin`) !== `sold`) {
          let minCoin = el.parentElement.childNodes[3].innerText;
          el.parentElement.setAttribute(`coin`, `sold`);
          el.parentElement.setAttribute(`buy`, `can`);

          if (
            parseInt(doc.querySelector(`.coin-count`).innerText) -
              parseInt(minCoin) <
            0
          ) {
            el.parentElement.setAttribute(`coin`, `notSold`);
            el.parentElement.setAttribute(`buy`, `cant`);
          } else {
            doc.querySelector(`.coin-count`).innerText =
              parseInt(doc.querySelector(`.coin-count`).innerText) -
              parseInt(minCoin);
          }
          setTimeout(() => {
            window.acc = 0;
          }, 50);
        }
        if (el.parentElement.getAttribute(`buy`) === `can`) {
          el.parentElement.style.cssText = `background-color: #2C3333; color: #fff`;
          el.parentElement.childNodes[0].style.cssText = `text-decoration: line-through;`;
          el.parentElement.childNodes[3].style.cssText = `text-decoration: line-through;`;
        }
      });
    });
  }, 10);
}
/// ====> saving page to the local storage

setInterval(() => {
  window.localStorage.setItem(
    `currentCoins`,
    doc.querySelector(`.coin-count`).innerHTML
  );

  localStorage.setItem(
    `task-tasks`,
    doc.querySelector(`.added-tasks`).innerHTML
  );
  localStorage.setItem(
    `store-tasks`,
    doc.querySelector(`.added-tasks2`).innerHTML
  );
}, 100);

if (localStorage.getItem(`currentCoins`) !== null) {
  doc.querySelector(`.coin-count`).textContent =
    localStorage.getItem(`currentCoins`);
}

if (localStorage.getItem(`task-tasks`) !== null) {
  doc.querySelector(`.added-tasks`).innerHTML =
    localStorage.getItem(`task-tasks`);

  deleteAndAdd();
}
if (localStorage.getItem(`store-tasks`) !== null) {
  doc.querySelector(`.added-tasks2`).innerHTML =
    localStorage.getItem(`store-tasks`);

  deleteAndAdd2();
}

//////////  ======> calender gift

doc.querySelector(`.gift`).onclick = () => {
  doc.querySelector(`.gift-div`).style.cssText = `display: flex`;

  doc.querySelector(`#close`).onclick = () => {
    doc.querySelector(`.gift-div`).style.cssText = `display: none`;
  };
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = weekday[d.getDay()];

doc.querySelector(`.calander-day`).innerText = `${day}`;

let dayWeeks = doc.querySelectorAll(`.day`);

dayWeeks.forEach((el) => {
  if (el.getAttribute(`day`) === day) {
    el.style.cssText = `background-color: #0096FF`;
  }
});

window.addAcc = 0;

setInterval(() => {
  doc.querySelector(`.added-tasks`).childNodes.forEach((el) => {
    if (el.getAttribute(`coin`) === `added`) {
      dayWeeks.forEach((el) => {
        if (el.getAttribute(`day`) === day) {
          el.style.cssText = `background-color: green`;

          localStorage.setItem(`${day}`, `done`);
        }
      });
    } else {
      dayWeeks.forEach((el) => {
        if (el.getAttribute(`day`) === day) {
          el.style.cssText = `background-color: #0096FF`;
          localStorage.setItem(`${day}`, `no`);
        }
      });
    }
  });
}, 1000);

/// use for each

for (i = 0; i < weekday.length; i++) {
  if (localStorage.getItem(`${weekday[i]}`) === `done`) {
    doc.querySelector(
      `[day="${weekday[i]}"]`
    ).style.cssText = `background-color: green`;
  }
  if (localStorage.getItem(`${weekday[i]}`) === `no`) {
    doc.querySelector(
      `[day="${weekday[i]}"]`
    ).style.cssText = `background-color: #2C3333`;
  }
}
