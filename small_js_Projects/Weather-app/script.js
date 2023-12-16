console.log("works");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const apiKey = "0361028f08e3abd7976b7d9491ac9f79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    let data = await response.json();
    console.log(data);

    // Updating in the web
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    if(data.weather[0].main == "Haze"){
        document.querySelector(".weather-icon").src = "./assests/cloud.png" 
    }
    else if(data.weatherp[0].main == "Cloud")
}

searchBtn.addEventListener("click", ()=>{
    console.log(searchBox.value);
    checkWeather(searchBox.value);
})
