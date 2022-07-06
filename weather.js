window.addEventListener('load', () => { // При загрузке
  let long; // ширина
  let lat; // долгота


  let description = document.querySelector('.weather-description'); // переменная описания погоды
  let location = document.querySelectorAll('.location'); // местоположение
  let temperature = document.querySelectorAll('.temperature'); // температура
  let icon = document.querySelectorAll('.weather-icon'); // иконка
  let cityId;

    for (let i = 0; i < temperature.length; i++) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => { // получение геолокации в браузере
        long = position.coords.longitude; // присваиваем ширину
        lat = position.coords.latitude; // присваиваем долготу
  
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=269b70f75feb3a32fc783af3f21b69f9&lang=ru&units=metric`; // подключение Openweathermap API
      
        fetch(api) // Запрос к API
          .then(response => {
            return response.json(); // сохраняем данные в json
          })
          .then(data => { // получаем пакет данных о погоде
            description.textContent = data.weather[0].description; // присваиавем описание
            location[i].textContent = data.name; // присваиваем местоположение
            temperature[i].textContent = Math.round(data.main.temp) + '°'; // присваиваем температуру (округление вверх)
            let iconCode = data.weather[0].icon; // получаем код иконки
            icon[i].src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // задаем путь картинке через полученный код
            cityId = data.id;
            let weatherContainer = document.querySelector('.weather');
            weatherContainer.onclick = () => {
            window.open(`https://openweathermap.org/city/${cityId}`);
            }
          });
      });
    } 
  };
  });   
  
