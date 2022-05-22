let form = document.getElementById("form");
let listRadio = document.getElementById("list-radio");
let listInput = document.getElementById("list-input").value;
let input = document.getElementById("list-input");

let radioForm = document.querySelector('input[type="radio"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  listRadio.checked = false;

  let allListItems = document.getElementById("all-list-items");
  let listItems = document.createElement("div");
  listItems.classList.add("list-items");

  let listItem = document.createElement("div");
  let listLabel = document.createTextNode(listInput);
  let spanLabel = document.createElement("span");
  spanLabel.classList.add("span-label");
  listItem.classList.add("list-label");
  let listRadioBtn = document.createElement("input");
  listRadioBtn.classList.add("list-radio-btn");
  listRadioBtn.setAttribute("type", "radio");
  listItems.appendChild(listRadioBtn);
  spanLabel.appendChild(listLabel);
  listItem.appendChild(spanLabel);
  listItems.appendChild(listItem);
  allListItems.appendChild(listItems);
});

listRadio.addEventListener("click", () => {
  if (listRadio.checked == true) {
    listRadio.checked = false;
    input.style.textDecoration = "line-through";
    radioForm.style.accentColor = "#8b0ffe";
    radioForm.style.height = "1.7em";
    radioForm.style.width = "1.7em";
    console.log(listRadio.checked);
  } else {
    listRadio.checked = true;
    input.style.textDecoration = "none";
    radioForm.style.accentColor = "#fff";
    radioForm.style.height = "1.7em";
    radioForm.style.width = "1.7em";
    console.log(listRadio.checked);
  }
});
// const yesBtn = document.getElementById('yes');
// yesBtn.checked = true;

// const noBtn = document.getElementById('no');
// noBtn.checked = true;
