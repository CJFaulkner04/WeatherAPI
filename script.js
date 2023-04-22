const form = document.querySelector('#form');
const zipcodeInput = document.querySelector('#zipcode');
const weatherContainer = document.querySelector('#weather');

function getWeather() {
  const zipcode = zipcodeInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=0a6595057ce869f2a5f189ce6d19157b&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
        const date = new Date();
        const city = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const tempHi = data.main.temp_max;
        const tempLo = data.main.temp_min;
  
        const weatherHtml = `
          <h2>${city}</h2>
          <p>${date.toLocaleDateString()}</p>
          <h3>${temp} &deg;F</h3>
          <p>Condition: ${description}</p>
          <div class="HiLo">
            <p class="high">Hi: ${tempHi} &deg;F</p>
            <p class="low">Lo: ${tempLo} &deg;F</p>
          </div>
        `;

      weatherContainer.innerHTML = weatherHtml;
    })
}

form.addEventListener('submit', event => {
  event.preventDefault();
  getWeather();
});