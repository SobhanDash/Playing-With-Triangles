const inputs = document.querySelectorAll(".ip");
const outDiv = document.querySelector(".output");
const outputMsg = document.querySelector("#outputMsg");
const btn = document.querySelector(".checkBtn");

outDiv.style.display = "none";

btn.addEventListener("click", () => {
  let b = Number(inputs[0].value);
  let h = Number(inputs[1].value);
  let hypo = Math.sqrt(b * b + h * h);
  outDiv.style.display = "block";
  outputMsg.innerText = ` The Hypotenuse is ${hypo} for the base ${b} and height ${h}`;
});
