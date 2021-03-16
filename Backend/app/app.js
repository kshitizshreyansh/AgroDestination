const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const authcontroller = require('../controller/authController');
const cropController = require('../controller/cropController');
const postController = require('../controller/postController');
const tipController = require('../controller/tipController');
const scropController = require('../controller/sellcropController');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next();
});

app.use('/auth', authcontroller);
app.use('/crop', cropController);
app.use('/posts', postController);
app.use('/tips', tipController);
app.use('/scrops', scropController);
app.get('/', (req, res, next) => {
    res.status(200).json({
        name: 'Agro Destination'
    })
})

module.exports = app;