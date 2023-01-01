const add_todo = document.querySelector("button");
const list_Container = document.querySelector(".list_Container");

add_todo.addEventListener("click", (e) =>{
    e.preventDefault()
    const inputTodo = document.querySelector("#inputTodo");


    const todo_container =  document.createElement('li')
    todo_container.className = 'todo_container';
    list_Container.appendChild(todo_container);


    const todo = document.createElement("span");
    todo.className = "todo";
    todo_container.appendChild(todo);
    const textNode = document.createTextNode(inputTodo.value)
    todo.appendChild(textNode)

    const delectTodo =  document.createElement("span");
    delectTodo.className = "delete";
    todo_container.appendChild(delectTodo)
    const trash = document.createElement('i')
    trash.className = "fa fa-trash"
    delectTodo.appendChild(trash)

    todo.addEventListener("click", ()=>{
        todo.classList.toggle("active")
    })

    delectTodo.addEventListener("click", () =>{
        if(todo.classList.toggle("active") == true){
            alert("check first bro")
        }else{
            todo_container.style.display = "none"
        }
    })

    inputTodo.value = "";
})