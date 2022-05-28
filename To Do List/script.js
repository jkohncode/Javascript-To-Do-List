let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  let dynamicDelete = document.createElement("button");
  let textContent = document.createTextNode("delete");
  dynamicDelete.appendChild(textContent);
  li.appendChild(dynamicDelete);
  dynamicDelete.addEventListener("click", () => {
    dynamicDelete.parentElement.remove();
  });
  li.addEventListener("click", () => {
    if (!li.classList.contains("done")) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
