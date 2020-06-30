const express = require('express');
const rcfeRouter = require('./routers/rcfe');
const cors = require('cors');
require('./db/mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(rcfeRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
