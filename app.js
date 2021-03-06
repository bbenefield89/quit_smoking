const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello, welcome to Express'));

app.listen(port, () => console.log(`Server listening on port: ${ port }`));
