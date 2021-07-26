const ip1 = document.querySelector(".ip1");
const ip2 = document.querySelector(".ip2");
const ip3 = document.querySelector(".ip3");

const form1 = document.forms[0];
const form2 = document.forms[1];
const form3 = document.forms[2];

const btn1 = document.querySelector(".check1");
const btn2 = document.querySelector(".check2");
const btn3 = document.querySelector(".check3");

const correctAns1 = ["option1", "option2", "option1"];
const correctAns2 = ["option1", "option1", "option2"];
const correctAns3 = ["option1", "option2", "option1"];

const outDiv = document.querySelector(".output");
const outputMsg = document.querySelector("#outputMsg");
const queDivs = document.querySelectorAll(".ow");

outDiv.style.display = "none";
ip2.style.display = "none";
ip3.style.display = "none";

let score = 0;

console.log(queDivs);

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  const data1 = new FormData(form1);
  let idx1 = 0;
  for (let entry1 of data1) {
    if (entry1[1] === correctAns1[idx1]) {
      queDivs[idx1].style.backgroundColor = "lightgreen";
      score++;
    } else {
      queDivs[idx1].style.backgroundColor = "pink";
      score = score - 0.5;
    }
    idx1++;
  }
  ip2.style.display = "block";
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const data2 = new FormData(form2);
  console.log(data2);
  let idx2 = 3;
  let id = 0;
  for (let entry2 of data2) {
    console.log(entry2);
    if (entry2[1] === correctAns2[id]) {
      queDivs[idx2].style.backgroundColor = "lightgreen";
      score++;
    } else {
      queDivs[idx2].style.backgroundColor = "pink";
      score = score - 0.5;
    }
    idx2++;
    id++;
  }
  ip3.style.display = "block";
});

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  const data3 = new FormData(form3);
  let idx3 = 6;
  let id2 = 0;
  for (let entry3 of data3) {
    console.log(entry3);
    if (entry3[1] === correctAns3[id2]) {
      queDivs[idx3].style.backgroundColor = "lightgreen";
      score++;
    } else {
      queDivs[idx3].style.backgroundColor = "pink";
      score = score - 0.5;
    }
    idx3++;
    id2++;
  }
  outDiv.style.display = "block";
  outputMsg.innerText = `The Score is ${score}`;
});
