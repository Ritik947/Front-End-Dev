const inp = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector("#scheduled");
let total = document.getElementById("total-val");
let tasks = [];

class Task {
  constructor(title, done) {
    this.title = title;
    this.done = done;
  }
}

function loadData() {
  if (!localStorage.getItem("tasks")) return;
  tasks = JSON.parse(localStorage.getItem("tasks"));
  total.innerHTML = tasks.length;
  tasks.forEach((todo, i) => {
    loadTodo(todo, i);
  });
}

function loadTodo(todo, i) {
  //   var todo = tasks[tasks.length - 1];
  const task = document.createElement("div");
  task.className = "todo";
  task.innerHTML = todo.title;
  del = document.createElement("button");
  del.innerHTML = "Delete";
  del.className = "removeTask";
  task.appendChild(del);
  todoList.appendChild(task);
  del.addEventListener("click", () => {
    todoList.removeChild(task);
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoList.innerHTML = "";
    loadData();
  });
}

btn.addEventListener("click", () => {
  if (inp.value === "") return;
  tasks.push(new Task(inp.value, 0));
  total.innerHTML = tasks.length;
  loadTodo(tasks[tasks.length - 1]);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inp.value = "";
});
