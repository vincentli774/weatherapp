//use async function as we need to wait for response from OpenWeatherMap 
async function getWeather() {
  //get city from html input
  const city = document.getElementById('city').value;
  const apiKey = '07db5ee3e129a96e70de045f61343790'; // OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  //fetch weather data for required city
  const res = await fetch(url);
  //convert response into json
  const data = await res.json();
  //const json = JSON.stringify(data);

  //200 is the code in the response that means the city is recognized
  if (data.cod == 200){
//document.getElementById("result").innerHTML = json;
//extracting data from json, converting to string, and returning data in html document
document.getElementById("temperature").innerHTML = JSON.stringify(data.main.temp);
document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].main);
document.getElementById("windspeed").innerHTML = JSON.stringify(data.wind.speed);
document.getElementById("humidity").innerHTML = JSON.stringify(data.main.humidity);
  }
  else{
    alert('city not found')
  }
}

//use async function as need to wait for response from backend
async function fetchCities(){
  const URL = "http://localhost:3000/cities";
  //fetch data from backend
  const response = await fetch(URL);
  //converting data into json
  const cities = await response.json();
  //returning the cities list in string format in the html document
  document.getElementById("cities").innerHTML = JSON.stringify(cities);
}
