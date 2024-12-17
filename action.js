const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = 'C:\\Desarrollo\\Ejemplo\\BD\\datos_personales.db';

function guardarSolicitud(apellido, nombre, ingreso, legajo, porcentaje, motivo) {
    return new Promise((resolve, reject) => {
        
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                return reject('Error al conectar a la base de datos: ' + err.message);
            }
        });
        

        db.get('INSERT INTO solicitudSAC (apellido, nombre, ingreso, legajo, porcentaje, motivo) values (?,?,?,?,?,?)',[apellido, nombre, ingreso, legajo, porcentaje, motivo], (err, row) => {
            if (err) {
                db.close();
                return reject('Error al consultar la base de datos: ' + err.message);
            }

            if (row) {
                resolve(true);
            } else {
                resolve(false);
            }

            
            db.close();
        });
    });
}


module.exports = { guardarSolicitud };