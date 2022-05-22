const API_KEY = "5216e84580f334f5942397bd86843d15";

function geoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(weather_url).then(response => response.json()).then(data => {
    const city = document.querySelector(".weather span:first-child");
    const weather = document.querySelector(".weather span:nth-of-type(2)");
    const temp = document.querySelector(".weather span:last-child");

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}`;
    temp.innerText = `${data.main.temp}${"℃"}`;
  });
}

function geoError(){
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);