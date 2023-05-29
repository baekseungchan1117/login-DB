"use strict";

// 모듈
const express = require('express');
const app = express();
const port = 3000;


// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use('/', home); // use -> 미들웨어를 등록해주는 메서드.

app.use(express.static(`${__dirname}/src/public`));

// module.exports = app;
//bin 연결 문제 ? 

app.listen(port, ()=> {
    console.log('서버 접속 완료');
})

