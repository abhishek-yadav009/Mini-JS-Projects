// Step-1 select all HTML elements 
const lists = document.querySelectorAll(".list")
const rightBox = document.querySelector("#right")
const leftBox = document.querySelector("#left")

// step-2 loop to select all left and right container
lists.forEach(list =>{
    list.addEventListener("dragstart", (e)=> {
        let selected = e.target // store the item being dragged

        // this one allows dropping on the right box
        rightBox.addEventListener("dragover", (e)=> {
            e.preventDefault() // its really necessary to prevent from defult to allow drop
        })

        // handeling dropping into the right box
        rightBox.addEventListener("drop", (e)=> {
            rightBox.appendChild(selected)
            selected = null  // we will reset the selected
        })
        // same for left
        leftBox.addEventListener("dragover", (e)=> {
            e.preventDefault()
        })

        leftBox.addEventListener("drop", (e)=> {
            leftBox.appendChild(selected)
            selected = null
        })
    })
})





