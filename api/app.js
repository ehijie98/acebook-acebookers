const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");

const postsRouter = require("./routes/posts");
const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");

const app = express();

// setup for receiving JSON
app.use(express.json())

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {

  let token;
  const authHeader = req.get("Authorization")

  if(authHeader) {
    token = authHeader.slice(7)
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if(err) {
      console.log(err)
      res.status(401).json({message: "auth error"});
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

// attempting to make user available to all frontend components for verification

// const checkUser = (req, res, next) => {
//   let token;
//   const authHeader = req.get("Authorization")

//   if(authHeader) {
//     token = authHeader.slice(7)
//   }

//     JWT.verify(token, process.env.JWT_SECRET, async (err, payload) => {
//       if(err) {
//         console.log(err)
//         res.locals.user = null;
//         next();
//         res.status(401).json({message: "auth error"});
//       } else {
//         // console.log(payload);
//         let user = await User.findById(payload.user_id);
//         res.locals.user = user
//         next();
//       }
//     });
//   } 


// route setup 
app.use("/posts", tokenChecker, postsRouter);
app.use("/comments", tokenChecker, commentsRouter);
app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({message: 'server error'})
});

module.exports = app;
