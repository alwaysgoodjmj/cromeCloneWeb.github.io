const clock = document.getElementById("clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours() % 12 ? date.getHours() % 12 : 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
