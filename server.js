const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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

    if (nombre != null){
      res.json({ message: 'Ok'});
      
    } else{
      res.status(401).json({ message: 'Nok' });

    }
  
      
  });
  
  app.get('/finalizado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'finalizado.html'));
  });
  

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

