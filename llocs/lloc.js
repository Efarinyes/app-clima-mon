const axios = require('axios');



const getLlocLatLong = async(lloc) => {


    const encodeUlr = encodeURI(lloc);

    // console.log(encodeUlr);

    // console.log(argv.ciutat);
    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,

        headers: { 'X-RapidAPI-Key': '8dc0f43327msh85fec1917317135p144687jsn2bc62d8c66b1' }
    });

    const resp = await instancia.get();

    if (resp.data.Results === 0) {
        throw new Error(`No hi ha resultats per ${ lloc }`);
    }


    // const { name: localitzacio, lat, lon } = resp.data.Results[0]; // Fem servir la desestructuracio dels objectes ( DATA )

    // Aqusta versió es la facilitada pel Profe

    const data = resp.data.Results[0];
    const localitzacio = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        localitzacio,
        lat,
        lng
    };
};

module.exports = {
    getLlocLatLong
};