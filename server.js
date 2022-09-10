const path = require('path');
require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const morgan = require('morgan');

//* Connect DB Logic
connectDB();

// middleware
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//API route setups
app.use('/api/auth', require('./routes/auth'));
app.use('/api/skill', require('./routes/skill'));
app.use('/api/user', require('./routes/user'));
app.use('/api/job', require('./routes/job'));
app.use('/api/company', require('./routes/company'));

//* Error Handler (Should be the last piece of middlerware)
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Api Running ');
  });
}

// * Server Logic
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`)
);
