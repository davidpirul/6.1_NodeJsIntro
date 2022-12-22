const {registrar, leer} = require('./operaciones.js')

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'registrar') {
  console.log('por favor ingresar todos los datos');
}

if (operacion === 'leer') {
  leer();
}
