// external imports
require("dotenv").config({ path: "./utils/.env" });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDb = require("./utils/database");
const port = process.env.PORT


// internal imports
const { notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler")
const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");
const usersRouter = require("./router/usersRouter");

// creating app
const app = express();


// database connection 
connectDb();
// request parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine 
app.set("view engine", "ejs");

// set static folder 
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// set routing
app.use("/", loginRouter);
app.use("/inbox", inboxRouter);
app.use("/users", usersRouter);



// 404 Not found handlers
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`app listening to port ${port}`)
});


