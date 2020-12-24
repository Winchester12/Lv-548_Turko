const express = require('express');
const cors = require('cors');
const moduleP = require('./my_modules/personalmodule');
const app = express();
const jsonBook = require('./books.json');

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get('/task1', (req, res) => {
    return res.json({
        message: "Your vote is accepted: " + moduleP.moduleFunc()
    })
})

app.get('/task2', (req, res) => {
  return res.json(jsonBook)
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
