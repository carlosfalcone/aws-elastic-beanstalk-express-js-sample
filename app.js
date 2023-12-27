const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Codigo alterado mais uma vez por Carlos Falcone!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
