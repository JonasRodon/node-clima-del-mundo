// const axios = require('axios')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv

// console.log(argv.direccion)
// let encodedUrl = encodeURI(argv.direccion)

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${Key1}`)
//   .then(resp => {
//     // console.log(resp.data)
//     // console.log(JSON.stringify(resp.data, undefined, 2))
//     let location = resp.data.results[0]
//     let coors = location.geometry.location
//     console.log('Dirección:', location.formatted_address)
//     console.log('lat:', coors.lat)
//     console.log('lng:', coors.lng)
//   })
//   .catch(e => console.log('ERROR!!!', e))

let getInfo = async (direccion) => {
  try {
    let coors = await lugar.getLugarLatLng(direccion)
    let temp = await clima.getClima(coors.lat, coors.lng)
    return `El clima en ${coors.direccion} es de ${temp}`
  } catch (e) {
    return `Ǹo se pudo determinar el clima en ${direccion}`
  }
}
// lugar.getLugarLatLng(argv.direccion)
//   .then(resp => {
//     console.log(resp)
//   })
//   .catch(e => console.log(e))

// clima.getClima(42.26550659999999, 42.26550659999999)
//   .then(temp => console.log(temp))
//   .catch(e => console.log(e))
getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e))
