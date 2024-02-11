const apiKey = "4551fb51846881e872a56416a38c10d7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

const body = document.querySelector("body");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    document.body.style.backgroundImage =
      "url('images/Default_high_quality_high_detailed_illustration_cloudy_day_1.jpg')";
    weatherIcon.src = "images/cloudy.png";
  }

  if (data.weather[0].main === "Rain") {
    document.body.style.backgroundImage =
      "url('images/Default_high_quality_high_detailed_illustration_rainy_cloudy_d_1.jpg')";
    weatherIcon.src = "images/rain.png";
  }

  if (data.weather[0].main === "Clear") {
    document.body.style.backgroundImage =
      "url('images/Default_high_quality_high_detailed_illustration_sunny_day_1.jpg')";
    weatherIcon.src = "images/clear.png";
  }

  if (data.weather[0].main === "Drizzle") {
    document.body.style.backgroundImage =
      "url('images/Default_high_quality_high_detailed_illustration_rainy_cloudy_d_1.jpg')";
    weatherIcon.src = "images/rain.png";
  }

  if (data.weather[0].main === "Mist") {
    document.body.style.backgroundImage =
      "url('images/Default_high_quality_high_detailed_illustration_mist_fog_day_i_1.jpg')";
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  weather.style.display = "block";
  checkWeather(search.value);
});

search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    weather.style.display = "block";
    checkWeather(search.value);
  }
});
