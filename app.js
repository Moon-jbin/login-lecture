"use strict";
// 서버의 중심 파일

//모듈
const express = require("express");
const app = express();

//라우팅(index.js에 있는 get()을 가져오기 위한 라우팅 분리)
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
