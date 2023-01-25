const form = document.querySelector("#form");
const list = document.querySelector("#list");
const deleteCheck = document.querySelector("#delete");

const deleteDefaultText = () => {
  const h2 = document.querySelector("#h2");
  if (h2) {
    h2.parentNode.removeChild(h2);
  }
};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const txt_task = new FormData(this);
  checkbox.setAttribute("type", "checkbox");

  const task = document.createTextNode(`${txt_task.get("nameTask")}`);
  li.appendChild(checkbox);
  label.appendChild(task);
  li.appendChild(label);
  list.appendChild(li);
  deleteDefaultText();
  checkbox.setAttribute("id", `checkbox${list.childElementCount}`);
  label.setAttribute("for", `checkbox${list.childElementCount}`);

  const inputText = document.querySelector("#txt_task");
  inputText.value = "";

  if (list.childElementCount === 1) {
    const button = document.createElement("button");
    button.innerHTML = "Delete all done";
    button.setAttribute("id", "deleteButton");
    deleteCheck.appendChild(button);
    console.log("aca");
    button.addEventListener("click", handleDelete);
  }
  checkbox.addEventListener("change", handleCheckTask);
}

function handleDelete(e) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const deleteButton = document.querySelector("#deleteButton");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].parentElement.remove();
      if (list.childElementCount === 0) {
        const h2 = document.createElement("h2");
        h2.setAttribute("id", "h2");
        h2.appendChild(document.createTextNode("No task"));
        list.appendChild(h2);
        deleteButton.remove();
      }
    }
  }
}

function handleCheckTask(e) {
  console.log("eventi de checkbox");
}
