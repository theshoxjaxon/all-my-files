let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let todoUl = document.querySelector(".todoList");
let elButton = document.querySelector(".button");

// elForm.addEventListener("submit", addTodo);
elButton.addEventListener("click", addTodo);

function addTodo(evt) {
  evt.preventDefault();
  let inputValue = elInput.value;
  elInput.value = "";
  if (inputValue === "") {
    alert("nmadir yozing endi");
  } else {
    //   create elements
    let newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    let newItem = document.createElement("li");
    //   let inputValue = elInput.value;
    newDiv.innerText = inputValue;
    newItem.classList.add("todoli");
    newDiv.appendChild(newItem);
    // Add button for Check
    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    newDiv.appendChild(completedButton);
    //    add Trash Button
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-button");
    newDiv.appendChild(trashButton);
    // appandchild
    todoUl.appendChild(newDiv);
  }
}
