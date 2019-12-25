require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const createError = require('http-errors');
const mongoose = require('mongoose')

const port = 3000;

const app = express();


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(morgan("dev"));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

require("./middlewares/connectRoute")(app);

app.use((req, res, next) => {
  next(createError(404));
})

app.use((err, req, res, next) => {
  console.log(err.status || 500);
})

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
