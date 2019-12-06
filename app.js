const llocs = require('./llocs/lloc');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    ciutat: {
        alias: 'c',
        desc: ' Nom de la ciutat de qual volem saber el temps',
        demand: true
    }
}).argv;


// argv.ciutat

// llocs.getLlocLatLong(argv.ciutat)
//     .then(console.log);

// clima.getClima(41.470001, 2.080000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(ciutat) => {


    try {
        const coords = await llocs.getLlocLatLong(ciutat);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura de ${ coords.localitzacio } es de ${ temp }.`;
    } catch (e) {
        return `No es pot determinar la temperatura de ${ ciutat }`;
    }

};

getInfo(argv.ciutat)
    .then(console.log)
    .catch(console.log);