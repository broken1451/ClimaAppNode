const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const yargs = require("./lugar/lugar").yargs;

// lugar
//   .getLugarLatitudLogitud(yargs.direccion)
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// clima
//   .getClima(45.35711, -75.70732)
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getInfo = async (direccion) => {
  // let climaLugar = await  lugar.getLugarLatitudLogitud(yargs.direccion);
  let lugarInfo = await lugar.getLugarLatitudLogitud(direccion);
  let climaLugar = await clima.getClima(lugarInfo.latitud, lugarInfo.longitud);

  // return{lugarInfo, climaLugar}
  try {
    if (!lugarInfo.direccion) {
      console.log(lugarInfo);
      return ` no se pudo determinar el clima de ${direccion}`;
    } else {
      return `El clima de ${lugarInfo.direccion} es de ${climaLugar.temp} grados`;
    }
  } catch (error) {
    return ` no se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(yargs.direccion)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(yargs);
// console.log(yargs.direccion);
// const encodeUrl = encodeURI(yargs.direccion);
// console.log(encodeUrl);

// const instance = axios.create({
//   baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,
//   headers: { json: "1" },
// });

// instance
//   .get()
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
