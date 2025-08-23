const inputField = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const temperatureEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

// Set a real default city
let defaultCity = "Lumbini";
async function fetchWeather(cityName) {
    try {
        const response = await fetch(`https://wttr.in/${cityName}?format=j1`);
        const data = await response.json();

        // Update the weather info
        temperatureEl.innerText = data.current_condition[0].temp_C + " °C";
        wind.innerText = data.current_condition[0].windspeedKmph + " km/h";
        humidity.innerText = data.current_condition[0].humidity + " %";
        cityEl.innerText = cityName;

        // Put city name back in input field
        inputField.value = cityName;

    } catch (error) {
        console.log("Error fetching weather:", error);
        temperatureEl.innerText = "---";
        wind.innerText = "---";
        humidity.innerText = "---";
        cityEl.innerText = "City not found!";
    }
}

// Load default city on page load
fetchWeather(defaultCity);

// Search button click
searchButton.addEventListener("click", function () {
    let newCity = inputField.value.trim();
    if (newCity !== "") {
        fetchWeather(newCity);
    } else {
        temperatureEl.innerText = "---";
        wind.innerText = "---";
        humidity.innerText = "---";
        cityEl.innerText = "Invalid city";
    }
});

// Enter key support
inputField.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
