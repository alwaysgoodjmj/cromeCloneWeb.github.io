//weather
const API_KEY = "5216e84580f334f5942397bd86843d15";

function geoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(weather_url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:nth-of-type(2)");
    const temp = document.querySelector("#weather span:last-child");

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}`;
    temp.innerText = `${data.main.temp}`;
  });
}

function geoError(){
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);

//clock
const clock = document.getElementById("clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours() % 12 ? date.getHours() % 12 : 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  clock.innerText = `${ampm} ${hours}:${minutes}`
}

getClock();

//username
const loginForm = document.querySelector("#login_form");
const userInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onWriteName(event){
  event.prventDefault();
  loginForm.classList.add(HIDDEN);
  localStorage.setItem(USERNAME_KEY, userInput.value);

  paintGreetings();
}
loginForm.addEventListener("submit", onWriteName);

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `HAVE A GOOD DAY ${username}`;
  greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onWriteName);
} else{
  paintGreetings();
}