require("dotenv").config();
const http = require("http");
const express = require("express");

const app = express();
const db = require("./database");

db.connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

global.appRoot = __dirname;

const { adminRouter, userRouter, authRouter } = require("./routes");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

const server = http.createServer(app);

server.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening on port ${process.env.PORT}...`);
});
