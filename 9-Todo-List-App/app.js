// step-1 get the HTML element
const listContainer = document.querySelector("#list-container")
const addButton = document.querySelector("#add-btn")
const inputBox = document.querySelector("#input-box")

// step-2 make a function to add a new task
function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please add something....")
    } else {
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li)

        // this is a delete option to delete the task
        let span = document.createElement("span")
        span.innerText = "x"
        li.appendChild(span)
    }
    
    inputBox.value = "" // and after adding all of the stuff we need to clear the input to add other task
    
    saveData() // run this saveData function to save the data(we will make this function soon)
}

// step-3 make an event listener that call the function to add the tesk

addButton.addEventListener("click", (addTask)) // we can add make this listner by old method like 
                                              // addButton.addEventListener("click", ()=>{
                                             //      addTask()
                                            //}) its same 

inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        
        e.target.classList.toggle("checked")
        saveData()

    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("todoList", listContainer.innerHTML);
}


function showTasks() {
    listContainer.innerHTML = localStorage.getItem("todoList");
}
showTasks();