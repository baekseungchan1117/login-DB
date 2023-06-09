"use strict";

// 모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.urlencoded({extended : true}));
//URL을 통해 전달되는 데이터에 언급, 공백, 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.json());


app.use('/', home); // use -> 미들웨어를 등록해주는 메서드.


// module.exports = app;
//bin 연결 문제 ? 

app.listen(port, ()=> {
    console.log('서버 접속 완료');
})

