// let form = document.getElementById("form");
// let listRadio = document.getElementById("list-radio");
// let listInput = document.getElementById("list-input").value;
// let input = document.getElementById("list-input");

// let radioForm = document.querySelector('input[type="radio"]');

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   listRadio.checked = false;

//   let allListItems = document.getElementById("all-list-items");
//   let listItems = document.createElement("div");
//   listItems.classList.add("list-items");

//   let listItem = document.createElement("div");
//   let listLabel = document.createTextNode(listInput);
//   let spanLabel = document.createElement("span");
//   spanLabel.classList.add("span-label");
//   listItem.classList.add("list-label");
//   let listRadioBtn = document.createElement("input");
//   listRadioBtn.classList.add("list-radio-btn");
//   listRadioBtn.setAttribute("type", "radio");
//   listItems.appendChild(listRadioBtn);
//   spanLabel.appendChild(listLabel);
//   listItem.appendChild(spanLabel);
//   listItems.appendChild(listItem);
//   allListItems.appendChild(listItems);
// });

// listRadio.addEventListener("click", () => {
//   if (listRadio.checked == true) {
//     listRadio.checked = false;
//     input.style.textDecoration = "line-through";
//     radioForm.style.accentColor = "#8b0ffe";
//     radioForm.style.height = "1.7em";
//     radioForm.style.width = "1.7em";
//     console.log(listRadio.checked);
//   } else {
//     listRadio.checked = true;
//     input.style.textDecoration = "none";
//     radioForm.style.accentColor = "#fff";
//     radioForm.style.height = "1.7em";
//     radioForm.style.width = "1.7em";
//     console.log(listRadio.checked);
//   }
// });
// // const yesBtn = document.getElementById('yes');
// // yesBtn.checked = true;

// // const noBtn = document.getElementById('no');
// // noBtn.checked = true;

let form = document.getElementById("form");
let input = document.getElementById("list-input");
let listItems = document.getElementById("list-form");
let inputCheckbox = document.getElementById("checkbox");
let countUncompleted = document.getElementById("count-uncompleted-items");

const toDoList = [];

form.addEventListener("submit", handleFormSubmit);
listItems.addEventListener("click", handleListClick);

function handleFormSubmit(event) {
  event.preventDefault();
  const todoItem = {
    text: input.value,
    isCompleted: inputCheckbox.checked,
  };
  if (input.value !== "") {
    toDoList.push(todoItem);
    input.value = "";
    inputCheckbox.checked = false;
    displayList();
    displayItemCount();
  }

  // console.log("To do list---", toDoList);
}

function displayItemCount() {
  const uncompletedItems = toDoList.filter(
    (item) => item.isCompleted === false
  );
  countUncompleted.textContent = uncompletedItems.length + " items lefts";
  uncompletedItems.style.color = "#000";
}

function displayList() {
  listItems.innerHTML = "";
  toDoList.forEach(function (item) {
    let listRadioBtn = document.createElement("input");
    listRadioBtn.classList.add("list-radio-btn");
    listRadioBtn.setAttribute("type", "checkbox");
    // console.log(item);
    listRadioBtn.checked = item.isCompleted;
    let listContainer = document.createElement("div");
    listContainer.classList.add("list-items");
    listContainer.appendChild(listRadioBtn);

    const listItem = document.createElement("li");
    listItem.textContent = item.text;
    listItem.classList.add("list-item");
    listItem.style.listStyle = "none";
    if (item.isCompleted) {
      listItem.classList.add("is-completed");
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    let allListElements = document.createElement("div");
    allListElements.classList.add("all-list-elements");
    listContainer.appendChild(listItem);
    allListElements.append(listContainer);
    allListElements.appendChild(deleteBtn);
    listItems.appendChild(allListElements); //listItems-list form olandi
  });
}
let iconBtn = document.getElementById("iconBtn");
let img = document.getElementById("img");
let iconMoon = document.getElementById("iconMoon");

iconBtn.onclick = function () {
  const theme = document.documentElement.dataset.theme;

  if (theme === "light") {
    document.documentElement.dataset.theme = "dark";
    img.style.backgroundImage = "url('../assets/images/bg-desktop-dark.jpg')";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "cover";
    img.style.width = "100%";
    img.style.height = "300px";
    document.getElementById("iconMoon").classList.remove("fa-moon");
    document.getElementById("iconMoon").classList.add("fa-sun");
  } else {
    document.documentElement.dataset.theme = "light";
    img.style.backgroundImage = "url('../assets/images/bg-desktop-light.jpg')";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "cover";
    img.style.width = "100%";
    img.style.height = "300px";
    document.getElementById("iconMoon").classList.remove("fa-sun");
    document.getElementById("iconMoon").classList.add("fa-moon");
  }
};

// <button class="delete-button">x</button>
// <input type="checkbox" />
// deleteBtn.onclick = function(){

// }
// console.log("delet");
// if (event.target.matches(".delete-btn")) {
//   // TODO: delete todo
//   console.log("event", event);
//   toDoList.splice(toDoList[0], 1);
// } else if (event.target.matches('input[type="checkbox"]')) {
//   // TODO: set completed true
//   toDoList.update();
// }
// displayList();

// background: url("../images/bg-desktop-light.jpg");
// background-repeat: no-repeat;
// background-size: cover;
// width: 100%;
// height: 300px;

function handleListClick(event) {
  // <button class="delete-button">x</button>
  // <input type="checkbox" />
  console.log("event", event);

  if (event.target.matches(".delete-btn")) {
    // TODO: delete todo
    console.log("if ", event);
    toDoList.splice(filanIndex, 1);
  } else if (event.target.matches('input[type="checkbox"]')) {
    // TODO: set completed true
    toDoList.update(filaIndex);
  }
  displayList();
}
