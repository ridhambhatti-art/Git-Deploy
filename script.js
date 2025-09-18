function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div class="actions">
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(element) {
  element.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}
