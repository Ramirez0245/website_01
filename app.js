const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//LOCAL REQUIRE
const homeRoute = require('./routes/home');
const CRUD = require('./routes/CRUD');

dotenv.config();
const app = express();

//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db!')
);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));  
app.set('view engine', 'handlebars');

app.use('/', homeRoute);
app.use('/CRUD', CRUD);

app.listen(3000, () => console.log('Listening on port 3000'));

/* STATUS: INCOMPELTE
    This version is dedicated to connection to the database  */