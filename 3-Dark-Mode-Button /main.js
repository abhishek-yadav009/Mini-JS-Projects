const colorChange = document.querySelector("#color-btn");
let isLight = true;

colorChange.addEventListener("click", () => {
    if (isLight === true) {
        document.body.style.backgroundColor = "black";
        colorChange.style.backgroundColor = "white";
        colorChange.style.color = "black";
        colorChange.innerText = "Light Mode";
        isLight = false;
    } else {
        document.body.style.backgroundColor = "white";
        colorChange.style.backgroundColor = "black";
        colorChange.style.color = "white";
        colorChange.innerText = "Dark Mode";
        isLight = true

    }
   
});
