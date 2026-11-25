const heading = document.getElementById("heading");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const output = document.getElementById("output");

btn1.addEventListener("click", function() {
  heading.innerHTML = "JavaScript is Successfully Connected!";
});

btn2.addEventListener("click", function() {
  heading.style.color = "crimson";
  heading.style.backgroundColor = "#ffe6e6";
});

btn3.addEventListener("click", function() {
  output.innerHTML = "You have learned how to connect JavaScript with HTML!";
});