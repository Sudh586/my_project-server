const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve images from 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// JSON Server middlewares
app.use(middlewares);
app.use(router);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
