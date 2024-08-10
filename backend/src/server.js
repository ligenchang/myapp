// backend/src/server.js
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/Item');
const config = require('./config');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

const PORT = config.port;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log(err));