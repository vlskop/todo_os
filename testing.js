let long = 54;
let lat = 36;

const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=269b70f75feb3a32fc783af3f21b69f9&lang=ru&units=metric`;
fetch(api)
.then(response => {
    return response.json();
})
.then (data => {
console.log(data);

})