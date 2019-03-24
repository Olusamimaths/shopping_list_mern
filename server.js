const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const items = require('./routes/api/item')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//DB config
const db = require('./config/config').mongoURI

// connect to db
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()  => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Mount Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))