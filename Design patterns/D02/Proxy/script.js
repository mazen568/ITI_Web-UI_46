class CountryService {
  async getCountryById(id) {
    console.log("fetching first time");

    const response = await fetch(`http://localhost:3000/countries/${id}`);

    return await response.json();
  }
}

class CountryProxy {
  constructor() {
    this.service = new CountryService();
    this.cache = {};
  }

  async getCountryById(id) {
    if (this.cache[id]) {
      console.log("returning from cache");

      return this.cache[id];
    }

    const country = await this.service.getCountryById(id);

    this.cache[id] = country;

    return country;
  }
}

const proxy = new CountryProxy();

console.log(await proxy.getCountryById(1));

console.log(await proxy.getCountryById(1));

console.log(await proxy.getCountryById(1));

