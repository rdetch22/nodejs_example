const express = require('express');

const mongoose = require('mongoose');

var cors = require('cors')

const path = require('path');

const stuffRoutes = require('./routes/stuff.js');

const productsRoutes = require('./routes/products.js');

const userRoutes = require('./routes/Users');

const app = express();
var bcrypt = require('bcryptjs');

app.use(cors())
mongoose.connect('mongodb://Oswin:220301@localhost:27017/nodedb',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/stuff', stuffRoutes);
  app.use('/api/products', productsRoutes);
  app.use('/api/auth', userRoutes);
  
  
module.exports = app;