const express = require('express');
const routes = require('./routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Service is healthy' });
});

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
