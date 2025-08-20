// step-1 get the HTML element
const listContainer = document.querySelector("#list-container")
const addButton = document.querySelector("#add-btn")
const inputBox = document.querySelector("#input-box")

// step-2 make a function to add a new task
function addTask(){
    if(inputBox.value.trim() === ""){
        alert("Please add something....")
    } else {
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li)

        // this is a delete button to delete the task
        let span = document.createElement("span")
        span.innerText = "x"
        li.appendChild(span)
    }
    inputBox.value = ""
    // run this SAVE function to save the data(we will cteate this function soon)
    saveData()
}

// step-3 make an event listener that call the function to add the tesk
addButton.addEventListener("click",(addTask))


addTask()