var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const passport = require('passport')
const session = require('express-session')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var questionsRouter = require("./routes/question");
var answersRouter = require("./routes/answer");
var googleRouter = require('./routes/google')

const DB =
  "mongodb+srv://Tayyab:Tayyab@cluster0.tgmvh.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

var app = express();
var cors = require("cors");
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);
app.use('/google',googleRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
