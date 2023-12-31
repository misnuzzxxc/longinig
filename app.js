"use strict";

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");

// 앱 설정
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // 미들웨어를 등록해주는 메서드 >> use

module.exports = app;

