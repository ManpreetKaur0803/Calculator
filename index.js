let input = document.getElementById("input");
let btn = document.querySelectorAll("button");

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    let key = e.target.textContent;
    if (key === "C") {
      input.innerText = "";
    } else if (key === "<") {
      input.innerText = key.slice(0, -1);
    } else if (key === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += key;
    }
    input.scrollLeft = input.scrollWidth;
  });
});
