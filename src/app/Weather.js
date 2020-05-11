// Se encarga de pedir los datos de la api de clima
export class Weather {
    constructor(city, countryCode) {
        //codigo de la api
        this.apikey = 'be6db3ef03480429fd7bedd13d0994b3';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        // permite hacer peticiones
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}