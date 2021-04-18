const express = require('express');


const app = express();

const rootCall = (req, res) => {
    res.send('Thanks');
}

app.get('/', (req, res) => {
    res.send('Thank you');
})

app.listen(3000, () => console.log('Listening'));