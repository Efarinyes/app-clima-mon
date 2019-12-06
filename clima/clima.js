const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6134386bafd1e90569ff502f8b397c69&units=metric`)
    return resp.data.main.temp;
};

module.exports = {
    getClima
}