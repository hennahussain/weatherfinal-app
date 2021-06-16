let now = new Date();
let dayandtime = document.querySelector("li#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

dayandtime.innerHTML = `${day}   ${hours}:${minutes}`;

//bonuswk4homework
function tempC(event) {
  let centerTemp = document.querySelector("#center-temp");
  centerTemp.innerHTML = "17°";
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", tempC);

function tempF(event) {
  let centerTemp = document.querySelector("#center-temp");
  centerTemp.innerHTML = "63°";
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", tempF);

//wk5searchengine

function showTemperature(response) {
  document.querySelector("#city-entered").innerHTML = response.data.name;
  document.querySelector("#center-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "6176b33dbef36670858058efe09ba0d6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#entercity").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Islamabad");
