"use strict"


// 프론트에서 작동하는 자바스크립트


const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value
    }

    // console.log(req);
    // console.log(JSON.stringify(req));
    
    fetch('/login', {    // 서버에서 받을 API를 만들어줘야 한다. 
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
           },   // 내가 전달하는 데이터가 JSON이라고 알려줘야한다. 
        body : JSON.stringify(req)
    })
}