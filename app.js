const argv = require('./config/yarg').argv;
const colors = require('colors');


const { crearArchivo, listarTable } = require('./multiplicar/multiplicar.js');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log(argv);
        break;
}
//let base = '7';

//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//console.log(multiplicar);
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/