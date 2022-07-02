window.addEventListener('load', () => {
  let long;
  let lat;

  let description = document.querySelector('.weather-description');
  let location = document.querySelector('.location');
  let temperature = document.querySelector('.temperature');
  let icon = document.querySelector('.weather-icon');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=269b70f75feb3a32fc783af3f21b69f9&lang=ru&units=metric`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          description.textContent = data.weather[0].description;
          location.textContent = data.name;
          temperature.textContent = Math.round(data.main.temp) + '°';
          let iconCode = data.weather[0].icon;
          icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        });
    });
  }
});
