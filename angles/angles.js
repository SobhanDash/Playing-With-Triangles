const inputs = document.querySelectorAll(".ip");
const checkBtn = document.querySelector(".checkBtn");
const outDiv = document.querySelector(".output");
const output = document.querySelector("#outputMsg");

outDiv.style.display = "none";
const angles = [];

checkBtn.addEventListener("click", () => {
  // for each input node add the value to list
  for (i = 0; i < inputs.length; i++) {
    angles[i] = Number(inputs[i].value);
  }

  let sum = 0;
  //for each angles check if sum is 180
  angles.map((angle) => {
    sum = sum + angle;
  });
  let diff = `${sum > 180 ? sum - 180 : 180 - sum}`;
  if (!angles[0] === 0 || !angles[1] === 0 || !angles[2] === 0) {
    if (sum === 180) {
      outDiv.style.display = "block";
      output.innerText = "Yay! It's a Triangle!! 🎉🥳";
    } else {
      outDiv.style.display = "block";
      output.innerText = `Oh Snap! It's not a Triangle. Give it another Shot 😉 It was off by ${diff}`;
    }
  } else {
    outDiv.style.display = "block";
    output.innerText = "Fill in the Inputs to get the result 📃";
  }
});
