const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const { guardarSolicitud } = require('./action');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Acordate de poner "/inicio"...');
  });

  app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','Formulario.html'));
  });

  app.post('/Formulario', (req, res) => {

    const { nombre, apellido, ingreso, legajo, porcentaje, motivo } = req.body; 
    try {

      if (guardarSolicitud){
      res.json({ message: 'Ok'});
      
      } else{
      res.status(401).json({ message: 'Nok' });

      }
    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
  
      
  };
  })
  app.get('/finalizado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'finalizado.html'));
  });
  

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

