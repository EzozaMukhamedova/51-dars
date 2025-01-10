// 1-masala
const buttons = document.getElementById("button");

buttons.addEventListener("click", () => {
  let newElement = document.createElement("button");
  newElement.textContent = "Yangi btn";
  document.body.appendChild(newElement);
});

// 2-masala
document.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key == "q") {
    document.body.style.background = "red";
  }
  if (e.key == "d") {
    document.body.style.background = "black";
  }
  if (e.key == "b") {
    document.body.style.background = "blue";
  }
  if (e.key == "s") {
    document.body.style.background = "yellow";
  }
});

// 3-masala
const button = document.getElementById("Tasodifiy");
const button2 = document.getElementById("random");

button.addEventListener("click", function (e) {
  button2.innerText = parseInt(Math.random() * 100);
});

button.addEventListener("click", () => {
  document.body.style.background = `rgb(
        ${parseInt(Math.random() * 255)},
        ${parseInt(Math.random() * 255)},
        ${parseInt(Math.random() * 255)}
        )`;
});
console.log(button);

// 4-masala
const bos = document.getElementById("rang");
let tekshir = false;
let sum;

bos.addEventListener("click", function () {
  if (!tekshir) {
    sum = setInterval(() => {
      document.body.style.background = `rgb(
                 ${parseInt(Math.random() * 255)},
                 ${parseInt(Math.random() * 255)},
                 ${parseInt(Math.random() * 255)}
               )`;
    }, 2000);
    tekshir = true;
  } else {
    clearInterval(sum);
    tekshir = false;
  }
});

// 5-masala
let img = [
  "./images/image1.png",
  "./images/image2.png",
  "./images/image3.png",
  "./images/image4.png",
  "./images/image5.png",
];
let rasm = 0;

setInterval(() => {
  if (rasm === 5) {
    rasm = 0;
  }
  document.getElementsByTagName("img")[0].src = img[rasm++];
}, 2000);
