require("dotenv");
const express = require('express');
const clean = require('./Utils/SecurityFUnction');
const helmet = require('helmet');
const app = express();
const port = process.env.port || 9000;

/* All middleware here */

app.use('view engine','ejs');
app.use(helmet());

app.listen(port,() => console.log(`listening on port ${port}`));
