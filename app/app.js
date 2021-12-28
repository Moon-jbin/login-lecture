"use strict";
// 서버의 중심 파일

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // npm i body-parser -s
// body-parser를 설치를 해도 다른 미들웨어를 등록 해줘야 한다.

//라우팅(index.js에 있는 get()을 가져오기 위한 라우팅 분리)
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어 부분
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // body-parser를 json데이터를 파싱해줄수 있도록 명시
app.use(bodyParser.urlencoded({ extended: true }));
// URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제를 해결해 준다.

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드 , 이 코드는 순서 중요 항상 마지막에 둘것

module.exports = app;
