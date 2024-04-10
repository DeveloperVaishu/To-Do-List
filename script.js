 let addText=document.getElementById("addText");
let todoList=document.getElementById("ToDoList");

function addTask(){
    if(addText.value === '')
    {""
        alert("you must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=addText.value;
        todoList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addText.value= "";
    saveData();
}

todoList.addEventListener("click" ,function(e){
    if(e.target.tagName =="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }



},false)

function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML=localStorage.getItem("data");
}
showTask();


 