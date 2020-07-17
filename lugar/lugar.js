const axios = require("axios");
const yargs = require("yargs").options({
  direccion: {
    alias: "d",
    description: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getLugarLatitudLogitud = async (dir) => {
  console.log(yargs);
  console.log(dir);
  const encodeUrl = encodeURI(dir);
  console.log(encodeUrl);

  const instance = axios.create({
    baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,
    // headers: { json: "1" },
  });

  const respuesta = await instance.get();
  if (respuesta.data.length === 0) {
    throw new Error("No hay resultados para: ", dir);
  }
  
  const data = respuesta.data;
  const direccion = data.standard.city;
  const longitud = data.longt;
  const latitud = data.latt;

  return {
    direccion,
    latitud,
    longitud,
  };
  //   return console.log('DATA: ', data )
};

module.exports = {
  getLugarLatitudLogitud: getLugarLatitudLogitud,
  yargs,
};
