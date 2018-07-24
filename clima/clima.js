const axios = require('axios')

const getClima = async (lat, lng) => {
  let api = require('../apiKeys/api')
  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api.key2}`)

  return resp.data.main.temp
}

module.exports = {
  getClima
}
