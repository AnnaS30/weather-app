let apiKey = "9125495e17811cb9a249d8d9e6c6b3f7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;

function showTemp(response) {
  let tempElement = document.querySelector("#temperature");
  let describtionElement = document.querySelector("#describtion");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  tempElement.innerHTML = Math.round(response.data.main.temp);
  describtionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

axios.get(apiUrl).then(showTemp);
console.log(apiUrl);
