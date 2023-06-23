(() => {

  const btn = document.querySelector("[data-from-btn]");

  const createTask = (evento) => {
    evento.preventDefault();
    //obtengo el input.
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    input.value = "";
    //obtengo la lista ul
    const list = document.querySelector("[data-list]");

    //creo un item de la lista
    const task = document.createElement("li");
    task.classList.add("card"); //agrego el estilo al item

    //crear contenedor
    const taskContent = document.createElement("div");
    //crear titulo
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;

    //agregar icono check
    taskContent.appendChild(checkComplete());
    //agregar titulo
    taskContent.appendChild(titleTask);
    //agregar contendio a li, task
    task.appendChild(taskContent);
    //agregar li (task) a la lista ul
    list.appendChild(task);
  }

  btn.addEventListener("click", createTask)

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  }
  const completeTask = (evento) => {
    const element = evento.target
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  }
})();