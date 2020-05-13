//Requireds
const fs = require('fs');
const colors = require('colors');

let listarTable = (base, limite = 10) => {

    console.log('==========================='.green);
    console.log(`======Tablita de ${base}====`.green);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {

        let multiplicador = i + 1;
        let resul = base * multiplicador;
        console.log(`${base}*${multiplicador}=${resul}\n`);
    }
}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {

            let multiplicador = i + 1;
            let resul = base * multiplicador;
            data += `${base}*${multiplicador}=${resul}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {

    crearArchivo,
    listarTable

}