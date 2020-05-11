const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

const storage = new Store();
const { city, countryCode } = storage.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();
// pagina principal de la app
require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

// para ver cuando el contenido ha sido cargado
document.addEventListener('DOMContentLoaded', fetchWeather);