const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += `<div class="li">
          <h3>${value}</h3>
          <div>
            <button class="edit">Edit</button>
            <button class="del">Delete</button>
          </div>
        </div>`;

  inp.value = "";
});

todoBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    const task = e.target.closest(".li");
    task.remove();
  }

  if (e.target.classList.contains("edit")) {
    const task = e.target.closest(".li");
    const h3 = task.querySelector("h3");

    const newValue = prompt("Edit task:", h3.textContent);
    if (newValue !== null && newValue.trim() !== "") {
      h3.textContent = newValue.trim();
    }
  }
});