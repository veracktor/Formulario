const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});