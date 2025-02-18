let address = document.getElementsByClassName("country-txt");
let todayDate = document.getElementById("currrentDate");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let wetherDes = document.getElementById("condition");
let temprature = document.getElementById("temprature");
let searchBtn = document.getElementById("search-btn");
let searchMessage = document.getElementById("searchMessage");
let searchInput = document.getElementById("searchOption");
let forecastContainer = document.getElementById("forecast-items-container");

let apiKey = "3d011fe8078637d1a4e611b8e07f583b";

// for when we give city name and press Enter key
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});

// when click search button
searchBtn.addEventListener("click", function () {
  let cityName = document.getElementById("searchOption").value;
  if (cityName == "") {
    alert("give city name");
  } else {
    searchMessage.style.display = "none";
    currentDate(cityName, apiKey);
    forecastData(cityName, apiKey);
  }
});

async function currentDate(city, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = await response.json();
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    let searchCity = document.getElementById("cityName");
    let todayDate = document.getElementById("currrentDate");
    document.getElementById("imgIcon").src = iconUrl;
    searchCity.innerText = " ";
    searchCity.innerText = weatherData.name;
    let date = new Date();
    date = date.toDateString();
    console.log(date);
    todayDate.innerText = date;
    temprature.innerText = `${weatherData.main.temp}°C`;
    humidity.innerText = `${weatherData.main.humidity}%`;
    windSpeed.innerText = `${weatherData.wind.speed} m/s`;
    wetherDes.innerText = weatherData.weather[0].description;
    document.getElementById("weather-section").style.display = "block";
  } catch (error) {
    alert("city not found");
    console.log(error);
  }
}

async function forecastData(city, apiKey) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  const forecast = await response.json();
  console.log(forecast);
  let forecastContainer = document.getElementById("forecast-items-container");
  forecastContainer.innerHTML = "";

  for (let item = 0; item < forecast.list.length; item += 8) {
    let itemData = forecast.list[item]; 
    console.log(itemData); 
    let itemDate = new Date(itemData.dt_txt);
    itemDate=itemDate.toDateString();  
    let iconCode = itemData.weather[0].icon;  
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;  
    let temperature = itemData.main.temp;  
    let forecastItem = document.createElement("div");
    forecastItem.classList.add("forecast-item");
    forecastItem.innerHTML = `
      <h5 class="forecast-item-date">${itemDate}</h5>
      <img src="${iconUrl}" class="forecast-item-img">
      <h5 class="forecast-item-temp">${temperature}°C</h5>
    `;
    forecastContainer.appendChild(forecastItem);
  }
}
