// se encarga de almacenar alchivo datos de local storage
export class Store {
    constructor() {
        this.city;
        this.countryCode;
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = 'London';
        } else {
            this.city = localStorage.getItem('city');
        }
        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = 'uk';
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

}