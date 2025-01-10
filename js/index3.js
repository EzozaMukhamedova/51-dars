const son = parseInt(Math.random() * 10);
console.log(son);

let con = document.getElementsByTagName("input")[0];

const bos = document.getElementById("click");

bos.addEventListener("click", function () {
  console.log(con.value);
  if (con.value == son) {
    document.getElementById("togri").style.display = "block";
  } else {
    document.getElementById("togri").style.display = "none";
  }
  if (con.value < son) {
    document.getElementById("xato1").style.display = "block";
  } else {
    document.getElementById("xato1").style.display = "none";
  }
  if (con.value > son) {
    document.getElementById("xato2").style.display = "block";
  } else {
    document.getElementById("xato2").style.display = "none";
  }
});
