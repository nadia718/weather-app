/*const apiKey = 'f827c04c334e2b89fcc450984c800a2d';
const city = 'Lahore';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
})*/






/*const apiKey = 'f827c04c334e2b89fcc450984c800a2d';
const city = 'Lahore'; // Use a valid city name
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => { console.log(data);

    // Update DOM here where `data` is available
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  })
  searchbtn.addEventListener("click" , ()=>{

  })
  .catch(error => console.error('Error:', error));*/




/*const apiKey = 'f827c04c334e2b89fcc450984c800a2d';
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "clouds"){
        weatherIcon. src = "weather-app-img/images/clouds.png";
      }
      else if(data.weather[0].main == "drizzle"){
        weatherIcon. src = "weather-app-img/images/drizzle.png";
      }
      else if(data.weather[0].main == "mist"){
        weatherIcon. src = "weather-app-img/images/mist.png";
      }
      else if(data.weather[0].main == "rain"){
        weatherIcon. src = "weather-app-img/images/rain.png";
      }
      else if(data.weather[0].main == "snow"){
        weatherIcon. src = "weather-app-img/images/snow.png";
      }
      else if(data.weather[0].main == "clear"){
        weatherIcon. src = "weather-app-img/images/clear.png";
      }
    })
    .catch(error => console.error('Error:', error));
}

// Default city on page load
getWeather("Lahore");

// When clicking the search button
searchbtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    getWeather(city);
  }
});*/





const apiKey = 'f827c04c334e2b89fcc450984c800a2d';
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      // Convert weather condition to lowercase for easier matching
      const weatherCondition = data.weather[0].main.toLowerCase();

      if (weatherCondition === "clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
      } else if (weatherCondition === "drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
      } else if (weatherCondition === "mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
      } else if (weatherCondition === "rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
      } else if (weatherCondition === "snow") {
        weatherIcon.src = "weather-app-img/images/snow.png";
      } else if (weatherCondition === "clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
      } else {
        // Fallback icon if condition not matched
        weatherIcon.src = "weather-app-img/images/clear.png";
      }
    })
    .catch(error => console.error('Error:', error));
}

// Default city on page load
getWeather("Lahore");

// When clicking the search button
searchbtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    getWeather(city);
  }
});

