const digitalCLock = document.querySelector("#clock")

function updateClock() {
    const now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    const currentTime = hours + ":" + minutes + ":" + seconds

    digitalCLock.innerText = currentTime

    setInterval(updateClock, 1000)
}

updateClock()
