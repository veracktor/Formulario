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
  

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});