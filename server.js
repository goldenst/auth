const express = require ('express');

const app = express();

// test script for postman
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server satrted on port ${PORT}`));