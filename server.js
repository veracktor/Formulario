const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
  });

  app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname,'public/Formulario.html'));
  });

  app.post('/Formulario', (req, res) => {

    const { fechaIng } = req.body;  
    if (fechaIng != null){
      res.json({ message: 'Ok'});
      
    } else{
      res.status(401).json({ message: 'Nok' });

    }
  
      
  });
  app.get('/finalizado', (req, res) => {
    res.sendFile(path.join(__dirname,'public/finalizado.html'));
  });
  

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
