require('dotenv').config()
const express = require('express');

const PORT = process.env.PORT || 3000;
const App = express();

App.listen(PORT, () => console.log(`Server listening on ${PORT}`));