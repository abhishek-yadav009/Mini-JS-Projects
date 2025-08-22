const lists = document.querySelectorAll(".list")
const rightBox = document.querySelector("#right")
const leftBox = document.querySelector("#left")


lists.forEach(list =>{
    list.addEventListener("dragstart", function (e) {
        let selected = e.target

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault()
        })

        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selected)
            selected = null
        })
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault()
        })

        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected)
            selected = null
        })
    })
})





