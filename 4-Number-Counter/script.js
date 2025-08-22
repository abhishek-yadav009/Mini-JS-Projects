const finalCounter = document.querySelector("#counter")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

let counter = 0

increase.addEventListener("click", () => {
    counter++
    finalCounter.innerText = counter

})

decrease.addEventListener("click", () => {
    counter--
    finalCounter.innerText = counter
})

reset.addEventListener("click", () => {
    counter = 0
    finalCounter.innerText = counter
})