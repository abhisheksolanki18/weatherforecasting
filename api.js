// JavaScript
const button = document.getElementById("1");
const input = document.getElementById("input");
const city = document.getElementById("place");
const time = document.getElementById("time");
const temperature = document.getElementById("temp");

// ✅ Use backticks for template literals in fetch URL
async function getData(cityName) {
    const apiKey = '7dc494516c3149a3bb381022250506'; // Replace with your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found or API issue");
        const data = await response.json();
        return data;
    } catch (error) {
        alert("Error fetching weather: " + error.message);
        return null;
    }
}

button.addEventListener('click', async () => {
    const value = input.value.trim();
    if (!value) {
        alert("Please enter a city name.");
        return;
    }

    const result = await getData(value);
    if (result) {
        city.innerText = `${result.location.name}, ${result.location.country}`;
        time.innerText = `Local Time: ${result.location.localtime}`;
        temperature.innerText = `Temperature: ${result.current.temp_c}°C`;
    }
});
