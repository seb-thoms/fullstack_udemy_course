const express  = require('express');
const app = express();

app.get('/', (req, res) => {
    resa.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);