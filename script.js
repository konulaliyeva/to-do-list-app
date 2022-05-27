let form = document.getElementById("form");
let input = document.getElementById("list-input");
let listItems = document.getElementById("list-form");
let inputCheckbox = document.getElementById("checkbox");
let countUncompleted = document.getElementById("count-uncompleted-items");

// dark/light moodun tetbiq olunmasi
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

let toDoList = [];

listItems.addEventListener("click", displayCount);

//Idlere gore itemsin checked/uncheked olunmasi
function displayCount(event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const key = event.target.parentElement.parentElement.dataset.key;
    toDoList.forEach((todoItem) => {
      if (todoItem.id == key) {
        todoItem.isCompleted = event.target.checked;
      }
    });
    displayItemCount();
  }
}

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const todoItem = {
    text: input.value,
    isCompleted: inputCheckbox.checked,
    id: Date.now(),
  };

  if (input.value !== "") {
    toDoList.push(todoItem);
    input.value = "";
    inputCheckbox.checked = false;
    displayList();
    displayItemCount();
  }
}
// unchecked olunan itemlarin sayinin hesablanmasi
function displayItemCount() {
  const uncompletedItems = toDoList.filter(
    (item) => item.isCompleted === false
  );
  countUncompleted.textContent = uncompletedItems.length + " items lefts";
}

// esas listi gosteren hisse
function showList(list) {
  listItems.innerHTML = "";
  list.forEach(function (item) {
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
    let deleteBtn = window.document.createElement("button");
    deleteBtn.classList.add("delete_btn");

    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    let allListElements = document.createElement("div");
    allListElements.classList.add("all-list-elements");
    listContainer.appendChild(listItem);
    allListElements.append(listContainer);
    allListElements.appendChild(deleteBtn);

    listItems.appendChild(allListElements); //listItems-list form olandi

    // checked olunan item count hesablma hissesi
    allListElements.setAttribute("data-key", item.id);
  });
}

//all hissesinin displayi
function displayList() {
  showList(toDoList);
}

//active hissesinin displayi
function showActives() {
  let activeItems = toDoList.filter((item) => item.isCompleted === false);
  showList(activeItems);
}
//completed hissesinin displayi
function showCompleted() {
  let completedItems = toDoList.filter((item) => item.isCompleted === true);
  showList(completedItems);
}

listItems.addEventListener("click", deleteListItem);

//listden itemin remove olunmasi
function deleteListItem(event) {
  if (event.target.matches("button.delete_btn")) {
    // event.target.parentElement.remove();
    const key = event.target.parentElement.dataset.key;

    let index = toDoList.findIndex((item) => Number(item.id) === Number(key));
    toDoList.splice(index, 1);
    displayList();
    displayItemCount();
  }
}

//filtred category hissesi
let listFilter = document.getElementById("filter");
let all = document.getElementById("all");
let active = document.getElementById("active");
let completed = document.getElementById("completed");
let clearCompleted = document.getElementById("clear_completed");
all.onclick = function () {
  all.style.color = "blue";
  active.style.color = "#000";
  completed.style.color = "#000";
  displayList();
};

active.onclick = function () {
  all.style.color = "#000";
  active.style.color = "blue";
  completed.style.color = "#000";
  showActives();
};

completed.onclick = function () {
  all.style.color = "#000";
  active.style.color = "#000";
  completed.style.color = "blue";
  showCompleted();
};

clearCompleted.onclick = function () {
  console.log("nese");
  toDoList = toDoList.filter((item) => item.isCompleted === false);
  displayList();
  displayItemCount();
};
