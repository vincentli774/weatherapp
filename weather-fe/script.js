async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '07db5ee3e129a96e70de045f61343790'; // OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  //const json = JSON.stringify(data);

  if (data.cod == 200){
//document.getElementById("result").innerHTML = json;
document.getElementById("temperature").innerHTML = JSON.stringify(data.main.temp);
document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].main);
document.getElementById("windspeed").innerHTML = JSON.stringify(data.wind.speed);
document.getElementById("humidity").innerHTML = JSON.stringify(data.main.humidity);
  }
  else{
    alert('city not found')
  }
}

async function fetchCities(){
  const URL = "http://localhost:3000/cities";
  const response = await fetch(URL);
  const cities = await response.json();
  document.getElementById("cities").innerHTML = JSON.stringify(cities);
}
