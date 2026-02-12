let taskId = 0;

function addTask(button) {
  const taskText = prompt("Enter task title");
  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";
  task.innerText = taskText;
  task.draggable = true;
  task.id = `task-${taskId++}`;

  task.ondragstart = drag;

  const column = button.previousElementSibling;
  column.appendChild(task);
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text");
  const task = document.getElementById(taskId);
  event.currentTarget.appendChild(task);
}
