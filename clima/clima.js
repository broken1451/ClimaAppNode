const axios = require("axios");

const yargs = require("yargs").options({
  direccion: {
    alias: "d",
    description: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getClima = async (lat, long) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&apiKey=0d852c623e8fe2fb2443092b0c358b07&units=metric`);// siempre en una preticion llevar el https://
  return res.data.main;
};

module.exports = {
  getClima: getClima,
  yargs,
};
