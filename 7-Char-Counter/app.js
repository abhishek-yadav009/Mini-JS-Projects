const allCharacter = document.querySelector("#text-input")
const charCount = document.querySelector("#char-count")


allCharacter.addEventListener("input",() =>{
    charCount.innerText = allCharacter.value.length
})

// IF YOU WANT TO SHOW THE WORD COUNT THEN 
// =============EITHER DO THIS 

// const allCharacter = document.querySelector("#text-input")
// const charCount = document.querySelector("#char-count")
// let count = 0

// allCharacter.addEventListener("keydown",(e) =>{
//     if (e.key === " "){
//         count++ 
//         charCount.innerText=count
//     }
// })

//============== OR THIS

// const allCharacter = document.querySelector("#text-input")
// const charCount = document.querySelector("#char-count")


// allCharacter.addEventListener("keydown",(e) =>{
//     if (e.key === " "){
//         (charCount.innerText)++
//     }
// })



